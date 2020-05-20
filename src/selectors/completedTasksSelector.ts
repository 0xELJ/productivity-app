import { createSelector } from 'reselect';
import { Task } from '../types/Task';

const tasksSelector = (state: { tasks: Task[] }) => state.tasks;

const getCompletedTasks = (tasks: Task[]): Task[] => {
    return tasks.filter(task => !task.enabled);
};

export default createSelector(
    tasksSelector,
    getCompletedTasks
);
