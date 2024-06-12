export type TaskStatus = 'todo' | 'in_progress' | 'in_review' | 'done';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
}

export interface TaskContextValues {
  isLoading: boolean;
  tasks: Task[];
  statuses: TaskStatus[];

  addTask: (task: Omit<Task, 'id'>) => void;
  updateTask: (id: Task['id'], updateTask: Omit<Task, 'id'>) => void;
  deleteTask: (id: Task['id']) => void;
}
