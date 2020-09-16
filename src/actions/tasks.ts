import { SyncAction } from '../types/SyncAction';
import { ActionTypes } from '../constants/ActionTypes';
import { TaskUpdate } from '../types/TaskUpdate';
import { TaskTime } from '../types/TaskTime';
import { TaskFilters } from '../constants/TaskFilters';
import { AsyncAction } from '../types/AsyncAction';
import { TaskFormValues } from '../types/TaskFormValues';

export function fetchAllTasks(): AsyncAction {
    return {
        request: {
            method: 'GET',
            url: '/tasks',
        },
        types: [
            ActionTypes.TASK_FETCH_ALL_PENDING,
            ActionTypes.TASK_FETCH_ALL_SUCCESS,
            ActionTypes.TASK_FETCH_ALL_ERROR,
        ],
    };
}

export function createTask(task: TaskFormValues): AsyncAction {
    const { title, description, hours, minutes, seconds } = task;
    return {
       request: {
           method: 'POST',
           url: '/tasks',
           data: { title, description, durationTime: { hours, minutes, seconds } }
       },
       types: [
           ActionTypes.TASK_CREATE_PENDING,
           ActionTypes.TASK_CREATE_SUCCESS,
           ActionTypes.TASK_CREATE_ERROR
       ],
    };
}

export function selectTask(id: number): SyncAction {
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

export function fetchTaskById(id: number): AsyncAction {
    return {
        request: {
            method: 'GET',
            url: `/tasks/${id}`
        },
        types: [
            ActionTypes.TASK_FETCH_DETAILS_PENDING,
            ActionTypes.TASK_FETCH_DETAILS_SUCCESS,
            ActionTypes.TASK_FETCH_DETAILS_ERROR
        ]
    };
}

export function updateTask(task: TaskUpdate): AsyncAction {
    return {
        request: {
            method: 'PATCH',
            url: `/tasks/${task.id}`,
            data: task,
        },
        types: [
            ActionTypes.TASK_UPDATE_ITEM_PENDING,
            ActionTypes.TASK_UPDATE_ITEM_SUCCESS,
            ActionTypes.TASK_UPDATE_ITEM_ERROR,
        ]
    };
}

export function deleteTask(taskId: number): AsyncAction {
    return {
        request: {
            method: 'DELETE',
            url: `/tasks/${taskId}`
        },
        types: [
            ActionTypes.TASK_REMOVE_ITEM_PENDING,
            ActionTypes.TASK_REMOVE_ITEM_SUCCESS,
            ActionTypes.TASK_REMOVE_ITEM_ERROR
        ]
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
