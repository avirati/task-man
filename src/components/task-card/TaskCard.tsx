import { Task } from '@/hooks/use-tasks';
import { Flex, Text } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
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
  );
};