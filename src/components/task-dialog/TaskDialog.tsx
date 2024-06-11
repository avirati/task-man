import { getStatusText } from '@/helpers';
import { TaskStatus, useTasks } from '@/hooks/use-tasks';
import {
  Button,
  Dialog,
  Flex,
  Select,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import { useNavigate, useParams } from 'react-router-dom';

export const TaskDialog = () => {
  const { statuses } = useTasks();
  const navigate = useNavigate();
  const { status } = useParams<{ status?: TaskStatus }>();

  if (status) {
    setTimeout(() => navigate('/new', { replace: true }));
  }

  return (
    <Dialog.Root
      defaultOpen
      onOpenChange={(open) => !open && navigate('/', { replace: true })}
    >
      <Dialog.Content maxWidth='450px'>
        <Dialog.Title>New Task</Dialog.Title>
        <Dialog.Description size='2' mb='4'>
          Add a new task to your list
        </Dialog.Description>

        <Flex direction='column' gap='3'>
          <label>
            <Text as='div' size='2' mb='1' weight='bold'>
              Title
            </Text>
            <TextField.Root
              placeholder='What would you like to achieve ?'
              required
            />
          </label>
          <label>
            <Text as='div' size='2' mb='1'>
              Description
            </Text>
            <TextArea placeholder='Elaborate a little...' />
          </label>
          <label>
            <Text as='div' size='2' mb='1'>
              Status
            </Text>
            <Select.Root defaultValue={status || statuses[0]}>
              <Select.Trigger />
              <Select.Content>
                {statuses.map((status) => (
                  <Select.Item
                    value={status}
                    key={`task-dialog-status-${status}`}
                  >
                    {getStatusText(status)}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </label>
        </Flex>

        <Flex gap='3' mt='4' justify='end'>
          <Dialog.Close>
            <Button variant='soft' color='gray'>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
