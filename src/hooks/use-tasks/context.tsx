import React from 'react';

import { Task, TaskContextValues } from './types';

export const TasksContext = React.createContext<TaskContextValues>({
  tasks: [],
  statuses: [],

  addTask: () => null,
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

  const value = React.useMemo<TaskContextValues>(
    () => ({
      tasks,
      statuses: ['todo', 'in_progress', 'done'],

      addTask,
    }),
    [tasks, addTask]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
