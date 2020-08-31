import { SyncAction } from '../types/SyncAction';
import { ActionTypes } from '../constants/ActionTypes';
import { Task } from '../types/Task';
import { TaskTime } from '../types/TaskTime';
import { TaskFilters } from '../constants/TaskFilters';
import { AsyncAction } from '../types/AsyncAction';

export function fetchAllTasks(): AsyncAction {
    return {
        types: [
            ActionTypes.TASK_FETCH_ALL_PENDING,
            ActionTypes.TASK_FETCH_ALL_SUCCESS,
            ActionTypes.TASK_FETCH_ALL_ERROR,
        ],
        request: {
            method: 'GET',
            url: '/tasks',
        }
    };
}

export function createTask(task: Task): SyncAction {
    return {
        type: ActionTypes.TASK_ADD_PENDING,
        payload: task,
    };
}

export function selectTask(id: string): SyncAction {
    return {
        type: ActionTypes.TASK_SET_SELECTED,
        payload: id
    };
}

export function resetSelectedTask(): SyncAction {
    return {
        type: ActionTypes.TASK_REMOVE_SELECTED
    };
}

export function updateTask(task: Task): SyncAction {
    return {
        type: ActionTypes.TASK_UPDATE_ITEM,
        payload: task
    };
}

export function deleteTask(taskId: string): SyncAction {
    return {
        type: ActionTypes.TASK_DELETE_ITEM,
        payload: taskId
    };
}

export function completeTask(time: TaskTime): SyncAction {
    return {
        type: ActionTypes.TASK_COMPLETE_ACTIVE,
        payload: time
    };
}

export function setPendingTasksFilter(filter: TaskFilters) {
    return {
        type: ActionTypes.TASKS_PENDING_SET_FILTER,
        payload: filter
    };
}

export function setCompletedTasksFilter(filter: TaskFilters) {
    return {
        type: ActionTypes.TASKS_COMPLETED_SET_FILTER,
        payload: filter
    };
}

export function reorderTasks(startId: string, endId: string) {
    return {
        type: ActionTypes.TASK_REORDER_LIST,
        payload: { startId, endId }
    };
}
