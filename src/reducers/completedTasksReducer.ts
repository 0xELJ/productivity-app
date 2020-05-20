import { Action } from '../types/Action';
import { ActionTypes } from '../constants/ActionTypes';
import { Task } from '../types/Task';

const INITIAL_STATE: Task[] = [];

export function completedTasksReducer(state = INITIAL_STATE, action: Action) {
    switch (action.type) {
        // case ActionTypes.TASK_ADD_COMPLETED:
        //     return [...state, action.payload];
        default:
            return state;
    }
}
