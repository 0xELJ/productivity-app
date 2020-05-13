import { TaskTime } from './TaskTime';

export interface Task {
    id: string;
    name: string;
    description: string;
    durationTime: TaskTime;
    timeLeft: TaskTime;
    createdAt: string;
    active: boolean;
    enabled: boolean;
}
