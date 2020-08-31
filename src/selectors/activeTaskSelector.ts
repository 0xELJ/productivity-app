import { createSelector } from 'reselect';
import { Task } from '../types/Task';
import { RootState } from '../types/RootState';

const tasksSelector = (state: RootState) => state.tasks.allTasks;

const getActiveTask = (tasks: Task []): Task | undefined => {
    return tasks.find(({ enabled }) => enabled);
};

export default createSelector(tasksSelector, getActiveTask);
