import React from 'react';

import { Task, TaskContextValues } from './types';

export const TasksContext = React.createContext<TaskContextValues>({
  tasks: [],
});

export const TasksProvider = ({ children }: React.PropsWithChildren) => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const value = React.useMemo<TaskContextValues>(
    () => ({
      tasks,
    }),
    [tasks]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
