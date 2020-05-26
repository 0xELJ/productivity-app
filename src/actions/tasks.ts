import { Action } from '../types/Action';
import { ActionTypes } from '../constants/ActionTypes';
import { Task } from '../types/Task';
import { TaskTime } from '../types/TaskTime';
import { TaskFilters } from '../constants/TaskFilters';

export function fetchTasks() {
    return async function (dispatch: Function) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        let fakeTodos = await response.json();
        fakeTodos = fakeTodos.slice(0, 50);
        dispatch({
            type: ActionTypes.TASK_GET_RANDOM_LIST,
            payload: fakeTodos
        });
    }
}

export function createTask(task: Task): Action {
    return {
        type: ActionTypes.TASK_ADD_PENDING,
        payload: task,
    };
}

export function selectTask(id: string): Action {
    return {
        type: ActionTypes.TASK_SET_SELECTED,
        payload: id
    };
}

export function resetSelectedTask(): Action {
    return {
        type: ActionTypes.TASK_REMOVE_SELECTED
    };
}

export function updateTask(task: Task): Action {
    return {
        type: ActionTypes.TASK_UPDATE_ITEM,
        payload: task
    };
}

export function deleteTask(taskId: string): Action {
    return {
        type: ActionTypes.TASK_DELETE_ITEM,
        payload: taskId
    };
}

export function completeTask(time: TaskTime): Action {
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
