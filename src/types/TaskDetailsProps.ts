import { Task } from './Task';

export interface TaskDetailsProps {
    show: boolean;
    handleClose(): void;
    task?: Task | null;
    resetTask?(): any;
    patchTask?(task: Task): any;
    removeTask?(id: string): any;
}
