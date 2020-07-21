import { createSelector } from 'reselect';
import { Task } from '../types/Task';
import { TaskFilters } from '../constants/TaskFilters';
import { filterTasks } from '../utils/filterTasks';

const tasksSelector = (state: { tasks: Task[] }) => state.tasks;
const filterSelector = (state: { filters: { completedFilter: TaskFilters } }) => state.filters.completedFilter;

const getCompletedTasks = (tasks: Task[], filter: TaskFilters): Task[] => {
    const completedTasks = tasks.filter(task => !task.enabled);
    return filterTasks(completedTasks, filter);
};

export default createSelector(
    tasksSelector,
    filterSelector,
    getCompletedTasks
);
