import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { selectedTaskReducer } from './selectedTaskReducer';
import { taskFiltersReducer } from './taskFiltersReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    tasks: tasksReducer,
    selectedTask: selectedTaskReducer,
    filters: taskFiltersReducer
});
