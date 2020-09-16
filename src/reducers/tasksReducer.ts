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
        case ActionTypes.TASK_UPDATE_ITEM_SUCCESS:
            const updatedTasks = [...state.allTasks];
            const updatedId = updatedTasks.findIndex(({ id }) => id === action.payload.id);
            updatedTasks[updatedId] = action.payload;
            return { ...state, allTasks: updatedTasks };
        case ActionTypes.TASK_REMOVE_ITEM_SUCCESS:
            const newTasks = state.allTasks.filter(({ id }) => id !== action.payload);
            return { ...state, allTasks: newTasks };
        default:
            return state;
    }
}
