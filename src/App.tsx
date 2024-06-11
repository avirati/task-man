import { Flex } from '@radix-ui/themes';

import { Header } from './components/header';
import { KanbanBoard } from './components/kanban-board';

export const App = () => {
  return (
    <Flex direction='column' align='center' style={{ padding: '0 32px' }}>
      <Header />
      <KanbanBoard>
        <KanbanBoard.Panels />
      </KanbanBoard>
    </Flex>
  );
};
