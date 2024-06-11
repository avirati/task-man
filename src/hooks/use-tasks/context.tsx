import React from 'react';

import { Task, TaskContextValues } from './types';

export const TasksContext = React.createContext<TaskContextValues>({
  tasks: [],
  statuses: [],

  addTask: () => null,
  updateTask: () => null,
});

export const TasksProvider = ({ children }: React.PropsWithChildren) => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const addTask = React.useCallback(
    (task: Omit<Task, 'id'>) => {
      setTasks([
        ...tasks,
        {
          ...task,
          id: `TM-${tasks.length + 1}`,
        },
      ]);
    },
    [tasks]
  );

  const updateTask = React.useCallback(
    (id: string, updatedTask: Omit<Task, 'id'>) => {
      const indexToUpdate = tasks.findIndex((task) => task.id === id);

      const updatedTasks = [...tasks];
      updatedTasks.splice(indexToUpdate, 1);

      setTasks([
        ...updatedTasks.slice(0, indexToUpdate),
        {
          id,
          ...updatedTask,
        },
        ...updatedTasks.slice(indexToUpdate),
      ]);
    },
    [tasks]
  );

  const value = React.useMemo<TaskContextValues>(
    () => ({
      tasks,
      statuses: ['todo', 'in_progress', 'done'],

      addTask,
      updateTask,
    }),
    [tasks, addTask, updateTask]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
