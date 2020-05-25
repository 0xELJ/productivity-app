import { Action } from '../types/Action';
import { ActionTypes } from '../constants/ActionTypes';
import { Task } from '../types/Task';
import { TaskTime } from '../types/TaskTime';

const INITIAL_STATE: Task[] = [];

export function tasksReducer(state = INITIAL_STATE, action: Action): Task[] {
    switch (action.type) {
        case ActionTypes.TASK_ADD_PENDING:
            return addPendingTask(state, action.payload);
        case ActionTypes.TASK_UPDATE_ITEM:
            return updateTask(state, action.payload);
        case ActionTypes.TASK_DELETE_ITEM:
            return deleteTask(state, action.payload);
        case ActionTypes.TASK_COMPLETE_ACTIVE:
            return completeTask(state, action.payload);
        case ActionTypes.TASK_REORDER_LIST:
            return reorderTasks(state, action.payload.startId, action.payload.endId);
        default:
            return state;
    }
}

const addPendingTask = (tasks: Task[], task: Task) => {
    return [...tasks, task];
};

const updateTask = (tasks: Task[], updatedTask: Task) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(({ id }) => id === updatedTask.id);
    newTasks[taskIndex] = updatedTask;
    return newTasks;
};

const deleteTask = (tasks: Task[], taskId: string) => {
    return tasks.filter(({ id }) => id !== taskId);
};

const completeTask = (tasks: Task[], timeLeft: TaskTime) => {
    const newTasks = [...tasks];
    const inProgressTask = newTasks.findIndex(({ enabled }) => enabled);
    newTasks[inProgressTask].enabled = false;
    newTasks[inProgressTask].timeLeft = timeLeft;
    return newTasks;
};

const reorderTasks = (tasks: Task[], startId: string, endId: string) => {
    const startIndex = tasks.findIndex(({ id }) => id === startId);
    const endIndex = tasks.findIndex(({ id }) => id === endId);
    const result: Task[] = [...tasks];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};
