import { TasksState } from '../types/TasksState';
import { Action } from '../types/Action';
import { ActionTypes } from '../constants/ActionTypes';

const INITIAL_STATE: TasksState = {
    pending: [],
    completed: []
};

export function tasksReducer(state = INITIAL_STATE, action: Action): TasksState {
    switch (action.type) {
        case ActionTypes.TASK_ADD_NEW:
            return {
                ...state,
                pending: [...state.pending, action.payload]
            };
        default:
            return state;
    }
}
