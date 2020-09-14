import { SyncAction } from '../types/SyncAction';
import { ActionTypes } from '../constants/ActionTypes';
import { TaskState } from '../types/TaskState';
import { RequestStatus } from '../constants/RequestStatus';

const INITIAL_STATE: TaskState = {
    allTasks: [],
    loading: RequestStatus.INACTIVE
};

export function tasksReducer(state = INITIAL_STATE, action: SyncAction): TaskState {
    switch (action.type) {
        case ActionTypes.TASK_FETCH_ALL_PENDING:
            return { ...state, loading: RequestStatus.PENDING };
        case ActionTypes.TASK_FETCH_ALL_SUCCESS:
            return { ...state, allTasks: action.payload, loading: RequestStatus.SUCCESSFUL };
        case ActionTypes.TASK_FETCH_ALL_ERROR:
            return { allTasks: [], loading: RequestStatus.FAILED };
        case ActionTypes.TASK_CREATE_PENDING:
            return { ...state, loading: RequestStatus.PENDING };
        case ActionTypes.TASK_CREATE_SUCCESS:
            return { loading: RequestStatus.SUCCESSFUL, allTasks: [...state.allTasks, action.payload] };
        case ActionTypes.TASK_CREATE_ERROR:
            return { ...state, loading: RequestStatus.FAILED };
        default:
            return state;
    }
}
