import { Action } from '../types/Action';
import { ActionTypes } from '../constants/ActionTypes';
import { Task } from '../types/Task';
import { TaskTime } from '../types/TaskTime';

export function createTask(task: Task): Action {
    return {
        type: ActionTypes.TASK_ADD_PENDING,
        payload: task,
    };
}

export function selectTask(id: string): Action {
    return {
        type: ActionTypes.TASK_SET_SELECTED,
        payload: id
    };
}

export function resetSelectedTask(): Action {
    return {
        type: ActionTypes.TASK_REMOVE_SELECTED
    };
}

export function updateTask(task: Task): Action {
    return {
        type: ActionTypes.TASK_UPDATE_ITEM,
        payload: task
    };
}

export function deleteTask(taskId: string): Action {
    return {
        type: ActionTypes.TASK_DELETE_ITEM,
        payload: taskId
    };
}

export function completeTask(time: TaskTime): Action {
    return {
        type: ActionTypes.TASK_COMPLETE_ACTIVE,
        payload: time
    };
}
