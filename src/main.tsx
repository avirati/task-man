import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';

import { App } from './App';

import '@radix-ui/themes/styles.css';
import './index.css';
import { TasksProvider } from './hooks/use-tasks';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <TasksProvider>
        <App />
      </TasksProvider>
    </Theme>
  </React.StrictMode>
);
