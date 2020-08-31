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
        // case ActionTypes.TASK_UPDATE_ITEM:
        //     return updateTask(state, action.payload);
        // case ActionTypes.TASK_DELETE_ITEM:
        //     return deleteTask(state, action.payload);
        // case ActionTypes.TASK_COMPLETE_ACTIVE:
        //     return completeTask(state, action.payload);
        // case ActionTypes.TASK_REORDER_LIST:
        //     return reorderTasks(state, action.payload.startId, action.payload.endId);
        default:
            return state;
    }
}
