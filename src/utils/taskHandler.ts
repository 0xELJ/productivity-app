import { Task } from '../types/Task';
import { TaskTime } from '../types/TaskTime';

export function addPendingTask(tasks: Task[], task: Task) {
    return [...tasks, task];
}

export function updateTask (tasks: Task[], updatedTask: Task) {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(({ id }) => id === updatedTask.id);
    newTasks[taskIndex] = updatedTask;
    return newTasks;
}

export function deleteTask(tasks: Task[], taskId: string) {
    return tasks.filter(({ id }) => id !== taskId);
}

export function completeTask(tasks: Task[], timeLeft: TaskTime) {
    // const newTasks = [...tasks];
    // const inProgressTask = newTasks.findIndex(({ enabled }) => enabled);
    // newTasks[inProgressTask].enabled = false;
    // newTasks[inProgressTask].timeLeft = timeLeft;
    // return newTasks;
}

export function reorderTasks(tasks: Task[], startId: string, endId: string) {
    const startIndex = tasks.findIndex(({ id }) => id === startId);
    const endIndex = tasks.findIndex(({ id }) => id === endId);
    const result: Task[] = [...tasks];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
}
