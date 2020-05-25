import { TaskFilters } from '../constants/TaskFilters';

export interface TaskFilterListProps {
    filters: readonly { filter: TaskFilters, label: string }[];
    currentFilter: TaskFilters,
    onPressFilter(filter: TaskFilters): void;
}
