import { ActionTypes } from '../constants/ActionTypes';
import { SyncAction } from '../types/SyncAction';
import { SelectedTaskState } from '../types/SelectedTaskState';

const INITIAL_STATE: SelectedTaskState = {
    selectedId: '',
    task: null
};

export function selectedTaskReducer(state = INITIAL_STATE, action: SyncAction): SelectedTaskState {
    switch (action.type) {
        case ActionTypes.TASK_SET_SELECTED:
            return { ...state, selectedId: action.payload };
        case ActionTypes.TASK_FETCH_DETAILS_SUCCESS:
            return { ...state, task: action.payload };
        case ActionTypes.TASK_REMOVE_SELECTED:
            return INITIAL_STATE;
        default:
            return state;
    }
}
