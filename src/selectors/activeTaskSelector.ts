import { createSelector } from 'reselect';
import { Task } from '../types/Task';
import { RootState } from '../types/RootState';
import { TaskStatus } from '../types/TaskStatus';

const tasksSelector = (state: RootState) => state.tasks.allTasks;

const getActiveTask = (tasks: Task []): Task | undefined => {
    return tasks.find(({ status }) => status === TaskStatus.IN_PROGRESS);
};

export default createSelector(tasksSelector, getActiveTask);
