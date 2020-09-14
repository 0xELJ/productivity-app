import { Task } from './Task';

export interface SelectedTaskState {
    selectedId: string;
    task: Task | null;
}
