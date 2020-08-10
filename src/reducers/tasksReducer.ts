import { SyncAction } from '../types/SyncAction';
import { ActionTypes } from '../constants/ActionTypes';
import { Task } from '../types/Task';
import { addPendingTask, completeTask, deleteTask, reorderTasks, updateTask } from '../utils/taskHandler';
import { generateTasks } from '../utils/taskGenerator';

const INITIAL_STATE: Task[] = [];

export function tasksReducer(state = INITIAL_STATE, action: SyncAction): Task[] {
    switch (action.type) {
        case ActionTypes.TASK_ADD_PENDING:
            return addPendingTask(state, action.payload);
        case ActionTypes.TASK_UPDATE_ITEM:
            return updateTask(state, action.payload);
        case ActionTypes.TASK_DELETE_ITEM:
            return deleteTask(state, action.payload);
        case ActionTypes.TASK_COMPLETE_ACTIVE:
            return completeTask(state, action.payload);
        case ActionTypes.TASK_REORDER_LIST:
            return reorderTasks(state, action.payload.startId, action.payload.endId);
        case ActionTypes.TASK_GET_RANDOM_LIST:
            return generateTasks(action.payload);
        default:
            return state;
    }
}
