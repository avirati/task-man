import { Flex } from '@radix-ui/themes';

import { Header } from './components/header';
import { KanbanBoard } from './components/kanban-board';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <Flex direction='column' align='center' style={{ padding: '0 32px' }}>
      <Header />
      <KanbanBoard>
        <KanbanBoard.Panels />
      </KanbanBoard>
      <Outlet />
    </Flex>
  );
};
