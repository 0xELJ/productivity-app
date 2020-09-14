import { SyncAction } from '../types/SyncAction';
import { ActionTypes } from '../constants/ActionTypes';
import { Task } from '../types/Task';
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

export function fetchTaskById(id: string): AsyncAction {
    return {
        request: {
            method: 'GET',
            url: `/tasks/${id}`
        },
        types: [
            null,
            ActionTypes.TASK_FETCH_DETAILS_SUCCESS,
            null
        ]
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
