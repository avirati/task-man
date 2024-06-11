import { Flex, Text } from '@radix-ui/themes';

import { TaskStatus, useTasks } from '@/hooks/use-tasks';
import { getStatusText } from '@/helpers';
import { TaskCard } from '../task-card';

interface TaskContainerProps {
  status: TaskStatus;
}

const TaskContainer: React.FC<TaskContainerProps> = ({ status }) => {
  const { tasks } = useTasks(status);

  return (
    <>
      <Text style={{ color: '#aaa', fontWeight: 'bold' }}>
        {getStatusText(status)} {tasks.length > 0 && `(${tasks.length})`}
      </Text>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </>
  );
};

export const KanbanBoardPanels = () => {
  const { statuses } = useTasks();

  return statuses.map((status) => (
    <Flex
      direction='column'
      gap='3'
      key={`kanban-panel-${status}`}
      style={{
        height: 'calc(100vh - 64px - 64px)',
        overflowY: 'auto',
        backgroundColor: '#f5f5fa',
        borderRadius: '4px',
        padding: '8px',
        flexGrow: 1,
      }}
    >
      <TaskContainer status={status} />
    </Flex>
  ));
};
