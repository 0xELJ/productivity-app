import { TaskFilters } from './TaskFilters';

export const TaskFilterOptions = Object.freeze([
    {
        filter: TaskFilters.SHOW_ALL,
        label: 'Cualquiera'
    },
    {
        filter: TaskFilters.SHOW_SHORT,
        label: 'Cortas'
    },
    {
        filter: TaskFilters.SHOW_MEDIUM,
        label: 'Medianas'
    },
    {
        filter: TaskFilters.SHOW_LONG,
        label: 'Largas'
    },
]);
