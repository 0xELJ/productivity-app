import { createSelector } from 'reselect';
import { Task } from '../types/Task';

const tasksSelector = (state: { tasks: Task[] }) => state.tasks;

const getActiveTask = (tasks: Task []): Task => {
    const firstTask = 0;
    return tasks[firstTask]
};

export default createSelector(tasksSelector, getActiveTask);
