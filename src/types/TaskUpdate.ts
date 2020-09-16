import { TaskTime } from './TaskTime';
import { TaskStatus } from './TaskStatus';

export interface TaskUpdate {
    id: number;
    title?: string;
    description?: string;
    durationTime?: TaskTime;
    remainingTime?: TaskTime;
    status?: TaskStatus;
}
