import { createSelector } from 'reselect';
import { Task } from '../types/Task';
import { TaskFilters } from '../constants/TaskFilters';
import { filterTasks } from '../utils/filterTasks';
import { RootState } from '../types/RootState';
import { TaskStatus } from '../types/TaskStatus';

const tasksSelector = (state: RootState) => state.tasks.allTasks;
const filterSelector = (state: { filters: { pendingFilter: TaskFilters } }) => state.filters.pendingFilter;

const getPendingTasks = (tasks: Task[], filter: TaskFilters): Task[] => {
    const taskInProgress = tasks.find(t => t.status === TaskStatus.IN_PROGRESS);
    let pendingTasks = tasks.filter(({ status }) => status === TaskStatus.OPEN);
    if (taskInProgress) {
        pendingTasks = [taskInProgress, ...pendingTasks];
    }
    return filterTasks(pendingTasks, filter);
};

export default createSelector(
    tasksSelector,
    filterSelector,
    getPendingTasks
);
