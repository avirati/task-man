import React from 'react';

import { Task, TaskContextValues } from './types';
import { TaskRepository } from '@/models/task';

export const TasksContext = React.createContext<TaskContextValues>({
  isLoading: false,
  tasks: [],
  statuses: [],

  addTask: () => Promise<void>,
  updateTask: () => Promise<void>,
  deleteTask: () => Promise<void>,
});

export const TasksProvider = ({ children }: React.PropsWithChildren) => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    TaskRepository.read()
      .then(setTasks)
      .finally(() => setIsLoading(false));
  }, []);

  const addTask = React.useCallback(
    async (task: Omit<Task, 'id'>) => {
      setIsLoading(true);
      setTasks([
        ...tasks,
        {
          ...task,
          id: `TM-${tasks.length + 1}`,
        },
      ]);

      const updatedTasks = await TaskRepository.create(task);
      setTasks(updatedTasks);
      setIsLoading(false);
    },
    [tasks]
  );

  const updateTask = React.useCallback(
    async (id: string, updatedTask: Omit<Task, 'id'>) => {
      setIsLoading(true);
      const indexToUpdate = tasks.findIndex((task) => task.id === id);

      const clonedTasks = [...tasks];
      clonedTasks.splice(indexToUpdate, 1);

      setTasks([
        ...clonedTasks.slice(0, indexToUpdate),
        {
          id,
          ...updatedTask,
        },
        ...clonedTasks.slice(indexToUpdate),
      ]);

      const updatedTasks = await TaskRepository.update({ id, ...updatedTask });
      setTasks(updatedTasks);
      setIsLoading(false);
    },
    [tasks]
  );

  const deleteTask = React.useCallback(
    async (id: Task['id']) => {
      setIsLoading(true);

      const clonedTasks = [...tasks];
      const indexToUpdate = tasks.findIndex((task) => task.id === id);
      clonedTasks.splice(indexToUpdate, 1);
      setTasks(clonedTasks);

      const updatedTasks = await TaskRepository.remove(id);
      setTasks(updatedTasks);
      setIsLoading(false);
    },
    [tasks]
  );

  const value = React.useMemo<TaskContextValues>(
    () => ({
      tasks,
      statuses: ['todo', 'in_progress', 'done'],
      isLoading,

      addTask,
      updateTask,
      deleteTask,
    }),
    [tasks, addTask, updateTask, deleteTask, isLoading]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
