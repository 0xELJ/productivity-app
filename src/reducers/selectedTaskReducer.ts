import { ActionTypes } from '../constants/ActionTypes';
import { Action } from '../types/Action';

const INITIAL_STATE: string = '';

export function selectedTaskReducer(state = INITIAL_STATE, action: Action): string {
    switch (action.type) {
        case ActionTypes.TASK_SET_SELECTED:
            return action.payload;
        case ActionTypes.TASK_REMOVE_SELECTED:
            return INITIAL_STATE;
        default:
            return state;
    }
}
