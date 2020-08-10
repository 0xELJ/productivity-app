import { SyncAction } from '../types/SyncAction';
import { TaskFilters } from '../constants/TaskFilters';
import { ActionTypes } from '../constants/ActionTypes';

const INITIAL_STATE: { pendingFilter: TaskFilters, completedFilter: TaskFilters } = {
    pendingFilter: TaskFilters.SHOW_ALL,
    completedFilter: TaskFilters.SHOW_ALL,
};

export function taskFiltersReducer(state = INITIAL_STATE, action: SyncAction) {
    switch (action.type) {
        case ActionTypes.TASKS_PENDING_SET_FILTER:
            return {
                ...state,
                pendingFilter: action.payload
            };
        case ActionTypes.TASKS_COMPLETED_SET_FILTER:
            return {
                ...state,
                completedFilter: action.payload
            };
        default:
            return state;
    }
}
