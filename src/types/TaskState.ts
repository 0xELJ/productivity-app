import { Task } from './Task';
import { RequestStatus } from '../constants/RequestStatus';

export interface TaskState {
    allTasks: Task[];
    loading: RequestStatus;
}
