import { Action } from '../types/Action';
import { ActionTypes } from '../constants/ActionTypes';
import { Task } from '../types/Task';

export function createTask(task: Task): Action {
    return {
        type: ActionTypes.TASK_ADD_NEW,
        payload: task,
    };
}
