import { Flex } from '@radix-ui/themes';

import { KanbanBoardPanels } from './KanbanBoardPanels';

export const KanbanBoard: React.FC<React.PropsWithChildren> & {
  Panels: typeof KanbanBoardPanels;
} = ({ children }) => {
  return (
    <Flex
      direction='row'
      gap='5'
      style={{ marginTop: '32px', marginBottom: '32px', width: '100%' }}
    >
      {children}
    </Flex>
  );
};

KanbanBoard.Panels = KanbanBoardPanels;
