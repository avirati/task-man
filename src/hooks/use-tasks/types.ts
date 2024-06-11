export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
}

export interface TaskContextValues {
  tasks: Task[];
  statuses: TaskStatus[];
}
