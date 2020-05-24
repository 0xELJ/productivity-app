import { createSelector } from 'reselect';
import { Task } from '../types/Task';
import { TaskFilters } from '../constants/TaskFilters';
import { filterTasks } from '../utils/filterTasks';

const tasksSelector = (state: { tasks: Task[] }) => state.tasks;
const filterSelector = (state: { filters: { pendingFilter: TaskFilters } }) => state.filters.pendingFilter;

const getPendingTasks = (tasks: Task[], filter: TaskFilters): Task[] => {
    const pendingTasks = tasks.filter(task => task.enabled);
    return filterTasks(pendingTasks, filter);
};

export default createSelector(
    tasksSelector,
    filterSelector,
    getPendingTasks
);
