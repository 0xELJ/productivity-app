import { createSelector } from 'reselect';
import { Task } from '../types/Task';

const tasksSelector = (state: { tasks: Task[] }) => state.tasks;

const getActiveTask = (tasks: Task []): Task | undefined => {
    return tasks.find(({ enabled }) => enabled);
};

export default createSelector(tasksSelector, getActiveTask);
