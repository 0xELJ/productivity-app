import { Action } from '../types/Action';
import { ActionTypes } from '../constants/ActionTypes';
import { Task } from '../types/Task';

const INITIAL_STATE: Task[] = [];

export function tasksReducer(state = INITIAL_STATE, action: Action): Task[] {
    switch (action.type) {
        case ActionTypes.TASK_ADD_NEW:
            return [...state, action.payload];
        case ActionTypes.TASK_UPDATE_ITEM:
            const taskIndex = state.findIndex(task => task.id === action.payload.id);
            const tasks = [...state];
            tasks[taskIndex] = action.payload;
            return tasks;
        case ActionTypes.TASK_DELETE_ITEM:
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }
}
