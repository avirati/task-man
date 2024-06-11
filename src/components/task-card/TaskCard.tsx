import { Task, useTasks } from '@/hooks/use-tasks';
import { TrashIcon } from '@radix-ui/react-icons';
import { Box, Flex, IconButton, Text } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { deleteTask } = useTasks();

  return (
    <Box style={{ position: 'relative' }}>
      <Link to={`/tasks/${task.id}`} style={{ textDecoration: 'none' }}>
        <Flex
          direction='column'
          gap='1'
          style={{
            background: '#fff',
            padding: '16px',
            borderRadius: '4px',
            boxShadow: '0 1px 2px #ccc',
            cursor: 'pointer',
          }}
        >
          <Text
            style={{ fontSize: '12px', color: '#3E63DD', fontWeight: 'bold' }}
          >
            {task.id}
          </Text>
          <Text style={{ fontSize: '14px', color: '#555' }}>{task.title}</Text>
        </Flex>
      </Link>
      <IconButton
        variant='ghost'
        style={{ position: 'absolute', top: 16, right: 16, cursor: 'pointer' }}
        onClick={() => deleteTask(task.id)}
      >
        <TrashIcon width='18' height='18' />
      </IconButton>
    </Box>
  );
};
