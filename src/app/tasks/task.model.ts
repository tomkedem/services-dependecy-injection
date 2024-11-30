export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export const TaskStatusOptions: {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: string;
  text: string;
}[] = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open'
  },
  {
    value: 'in-progress',
    taskStatus: 'IN-PRGRESS',
    text: 'in-progress'
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    text: 'Completed'
  },
]

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
