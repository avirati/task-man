import React from 'react';

import { Task, TaskContextValues } from './types';

export const TasksContext = React.createContext<TaskContextValues>({
  tasks: [],
  statuses: [],
});

export const TasksProvider = ({ children }: React.PropsWithChildren) => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const value = React.useMemo<TaskContextValues>(
    () => ({
      tasks,
      statuses: ['todo', 'in_progress', 'done'],
    }),
    [tasks]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
