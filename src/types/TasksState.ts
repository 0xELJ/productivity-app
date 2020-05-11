import { Task } from './Task';

export interface TasksState {
    pending: Task[];
    completed: Task[];
}
