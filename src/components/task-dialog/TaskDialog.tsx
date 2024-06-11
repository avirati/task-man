import {
  Button,
  Dialog,
  Flex,
  Select,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getStatusText } from '@/helpers';
import { TaskStatus, useTasks } from '@/hooks/use-tasks';

export const TaskDialog = () => {
  const { statuses, addTask } = useTasks();
  const navigate = useNavigate();
  const { status } = useParams<{ status?: TaskStatus }>();

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [taskStatus, setTaskStatus] = React.useState<TaskStatus | undefined>(
    status
  );
  const [isOpen, setIsOpen] = React.useState(true);

  if (status) {
    setTimeout(() => navigate('/new', { replace: true }));
  }

  const isFormValid = Boolean(title);

  const onSubmit = () => {
    if (isFormValid) {
      addTask({
        title,
        status: taskStatus!,
        description,
      });

      setIsOpen(false);
    }
  };

  return (
    <Dialog.Root
      open={isOpen}
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
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            <Text as='div' size='2' mb='1'>
              Description
            </Text>
            <TextArea
              placeholder='Elaborate a little...'
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <label>
            <Text as='div' size='2' mb='1'>
              Status
            </Text>
            <Select.Root
              defaultValue={status || statuses[0]}
              onValueChange={(value) => setTaskStatus(value as TaskStatus)}
            >
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
            <Button disabled={!isFormValid} onClick={onSubmit}>
              Save
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
