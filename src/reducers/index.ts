import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { selectedTaskReducer } from './selectedTaskReducer';

export const rootReducer = combineReducers({
    tasks: tasksReducer,
    selectedTask: selectedTaskReducer,
});
