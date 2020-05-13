import { Task } from './Task';
import { Action } from './Action';

export interface TaskCreateProps {
    show: boolean;
    handleClose(): void;
    addTask(task: Task): Action;
}
