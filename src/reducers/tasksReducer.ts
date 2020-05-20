import { Action } from '../types/Action';
import { ActionTypes } from '../constants/ActionTypes';
import { Task } from '../types/Task';

const INITIAL_STATE: Task[] = [];

export function tasksReducer(state = INITIAL_STATE, action: Action): Task[] {
    switch (action.type) {
        case ActionTypes.TASK_ADD_PENDING:
            return [...state, action.payload];
        case ActionTypes.TASK_UPDATE_ITEM:
            const updatedTasks = [...state];
            const taskIndex = updatedTasks.findIndex(({ id }) => id === action.payload.id);
            updatedTasks[taskIndex] = action.payload;
            return updatedTasks;
        case ActionTypes.TASK_DELETE_ITEM:
            return state.filter(task => task.id !== action.payload);
        case ActionTypes.TASK_COMPLETE_ACTIVE:
            const newTasks = [...state];
            const inProgressTask = newTasks.findIndex(({ enabled }) => enabled);
            newTasks[inProgressTask].enabled = false;
            newTasks[inProgressTask].timeLeft = action.payload;
            return newTasks;
        default:
            return state;
    }
}
