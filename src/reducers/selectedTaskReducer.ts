import { ActionTypes } from '../constants/ActionTypes';
import { SyncAction } from '../types/SyncAction';

const INITIAL_STATE: string = '';

export function selectedTaskReducer(state = INITIAL_STATE, action: SyncAction): string {
    switch (action.type) {
        case ActionTypes.TASK_SET_SELECTED:
            return action.payload;
        case ActionTypes.TASK_REMOVE_SELECTED:
            return INITIAL_STATE;
        default:
            return state;
    }
}
