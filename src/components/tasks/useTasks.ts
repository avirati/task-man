import React from 'react';

import { TasksContext } from './context';

export const useTasks = () => {
  const context = React.useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks should be wrapped inside TasksProvider');
  }

  return {
    ...context,
  };
};
