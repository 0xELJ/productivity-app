import { Task } from './Task';
import { RequestStatus } from '../constants/RequestStatus';

export interface SelectedTaskState {
    selectedId: number;
    task: Task | null;
    fetchStatus: RequestStatus;
    updateStatus: RequestStatus;
    removeStatus: RequestStatus;
}
