import { createSelector } from 'reselect';
import { Task } from '../types/Task';

const tasksSelector = (state: { tasks: Task[] }) => state.tasks;
const taskIdSelector = (state: { selectedTask: string }) => state.selectedTask;

const getTaskDetails = (tasks: Task [], taskId: string): Task | undefined => {
    return tasks.find(task => task.id === taskId);
};

export default createSelector(tasksSelector, taskIdSelector, getTaskDetails);
