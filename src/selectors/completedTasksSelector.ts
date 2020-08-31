import { createSelector } from 'reselect';
import { Task } from '../types/Task';
import { TaskFilters } from '../constants/TaskFilters';
import { filterTasks } from '../utils/filterTasks';
import { RootState } from '../types/RootState';
import { TaskStatus } from '../types/TaskStatus';

const tasksSelector = (state: RootState) => state.tasks.allTasks;
const filterSelector = (state: { filters: { completedFilter: TaskFilters } }) => state.filters.completedFilter;

const getCompletedTasks = (tasks: Task[], filter: TaskFilters): Task[] => {
    const completedTasks = tasks.filter(({ status }) => status === TaskStatus.DONE);
    return filterTasks(completedTasks, filter);
};

export default createSelector(
    tasksSelector,
    filterSelector,
    getCompletedTasks
);
