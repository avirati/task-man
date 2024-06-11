import { Flex, IconButton, Text } from '@radix-ui/themes';

import { TaskStatus, useTasks } from '@/hooks/use-tasks';
import { getStatusText } from '@/helpers';
import { TaskCard } from '../task-card';
import { PlusIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

interface TaskContainerProps {
  status: TaskStatus;
}

const TaskContainer: React.FC<TaskContainerProps> = ({ status }) => {
  const { tasks } = useTasks(status);
  const navigate = useNavigate();

  return (
    <>
      <Flex justify='between'>
        <Text style={{ color: '#aaa', fontWeight: 'bold' }}>
          {getStatusText(status)} {tasks.length > 0 && `(${tasks.length})`}
        </Text>
        <IconButton
          variant='soft'
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(`/new/${status}`)}
        >
          <PlusIcon width='18' height='18' />
        </IconButton>
      </Flex>
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
