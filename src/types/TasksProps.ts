import { Task } from './Task';
import { Action } from './Action';
import { TaskFilters } from '../constants/TaskFilters';

export interface TasksProps {
    pendingTasks: Task[];
    completedTasks: Task[];
    setSelectedTask(id: string): Action;
    setPendingFilter(filter: TaskFilters): any;
    setCompletedFilter(filter: TaskFilters): any;
    pendingFilter: TaskFilters;
    completedFilter: TaskFilters;
    reorderTaskList(startId: string, endId: string): any;
    activeTaskId: string | undefined;
}
