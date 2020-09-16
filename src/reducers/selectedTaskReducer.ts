import { ActionTypes } from '../constants/ActionTypes';
import { SyncAction } from '../types/SyncAction';
import { SelectedTaskState } from '../types/SelectedTaskState';
import { RequestStatus } from '../constants/RequestStatus';

const INITIAL_STATE: SelectedTaskState = {
    selectedId: 0,
    task: null,
    fetchStatus: RequestStatus.INACTIVE,
    updateStatus: RequestStatus.INACTIVE,
    removeStatus: RequestStatus.INACTIVE,
};

export function selectedTaskReducer(state = INITIAL_STATE, action: SyncAction): SelectedTaskState {
    switch (action.type) {
        case ActionTypes.TASK_SET_SELECTED:
            return { ...state, selectedId: action.payload };
        case ActionTypes.TASK_FETCH_DETAILS_PENDING:
            return { ...state, fetchStatus: RequestStatus.PENDING };
        case ActionTypes.TASK_FETCH_DETAILS_SUCCESS:
            return { ...state, fetchStatus: RequestStatus.SUCCESSFUL, task: action.payload };
        case ActionTypes.TASK_FETCH_DETAILS_ERROR:
            return { ...state, fetchStatus: RequestStatus.FAILED };
        case ActionTypes.TASK_UPDATE_ITEM_PENDING:
            return { ...state, updateStatus: RequestStatus.PENDING };
        case ActionTypes.TASK_UPDATE_ITEM_SUCCESS:
            return { ...state, updateStatus: RequestStatus.SUCCESSFUL, task: action.payload };
        case ActionTypes.TASK_UPDATE_ITEM_ERROR:
            return { ...state, updateStatus: RequestStatus.FAILED };
        case ActionTypes.TASK_REMOVE_ITEM_PENDING:
            return { ...state, removeStatus: RequestStatus.PENDING };
        case ActionTypes.TASK_REMOVE_ITEM_SUCCESS:
            return { ...state, removeStatus: RequestStatus.SUCCESSFUL };
        case ActionTypes.TASK_REMOVE_ITEM_ERROR:
            return { ...state, removeStatus: RequestStatus.FAILED };
        case ActionTypes.TASK_REMOVE_SELECTED:
            return INITIAL_STATE;
        default:
            return state;
    }
}
