import React from 'react';

import { TasksContext } from './context';
import { TaskStatus } from './types';

export const useTasks = (status?: TaskStatus) => {
  const context = React.useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks should be wrapped inside TasksProvider');
  }

  const { tasks } = context;

  return {
    ...context,
    tasks: status ? tasks.filter((task) => task.status === status) : tasks,
  };
};
