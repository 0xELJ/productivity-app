import { TaskTime } from './TaskTime';
import { TaskStatus } from './TaskStatus';

export interface Task {
    id: number;
    title: string;
    description: string;
    durationTime: TaskTime;
    remainingTime: TaskTime;
    createdAt: string;
    status: TaskStatus;
}
