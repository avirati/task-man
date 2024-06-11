import { Flex, Text } from '@radix-ui/themes';

import { useTasks } from '@/hooks/use-tasks';
import { getStatusText } from '@/helpers';

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
        borderRadius: '4px',
        padding: '8px',
        flexGrow: 1,
      }}
    >
      <Text style={{ color: '#aaa', fontWeight: 'bold' }}>
        {getStatusText(status)}
      </Text>
    </Flex>
  ));
};
