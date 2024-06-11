import { Flex } from '@radix-ui/themes';

import { Header } from './components/Header';
import { KanbanBoard } from './components/kanban-board';

export const App = () => {
  return (
    <Flex direction='column' align='center'>
      <Header />
      <KanbanBoard>
        <KanbanBoard.Panels />
      </KanbanBoard>
    </Flex>
  );
};
