import { TaskTime } from './TaskTime';
import { TaskStatus } from './TaskStatus';

export interface Task {
    id: string;
    title: string;
    description: string;
    durationTime: TaskTime;
    timeLeft: TaskTime;
    createdAt: string;
    status?: TaskStatus;
    active?: boolean;
    enabled?: boolean;
}
