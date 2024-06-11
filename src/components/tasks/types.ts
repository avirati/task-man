export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface Task {
  title: string;
  description?: string;
  status: TaskStatus;
}

export interface TaskContextValues {
  tasks: Task[];
}
