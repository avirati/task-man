import { Flex } from '@radix-ui/themes';

import { useTasks } from '@/hooks/use-tasks';

export const KanbanBoardPanels = () => {
  const { statuses } = useTasks();

  return statuses.map((status) => (
    <Flex
      direction='column'
      gap='5'
      style={{
        height: 'calc(100vh - 64px - 64px)',
        overflowY: 'auto',
        backgroundColor: '#f5f5fa',
        width: '320px',
        borderRadius: '4px',
        boxShadow: '#ccc 0 0 10px inset',
        padding: '32px',
      }}
    >
      {status}
    </Flex>
  ));
};
