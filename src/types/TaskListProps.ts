import { Task } from './Task';
import { TaskFilters } from '../constants/TaskFilters';

export interface TaskListProps {
    title: string;
    tasks: Task[];
    onSelectTask(id: string): void;
    activeTaskId?: string;
    onPressFilter(filter: TaskFilters): void;
    currentFilter: TaskFilters;
    onDragEnd(startId: string, endId: string): void;
    disableDrop?: boolean;
}
