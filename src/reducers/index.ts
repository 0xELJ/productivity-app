import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { selectedTaskReducer } from './selectedTaskReducer';
import { taskFiltersReducer } from './taskFiltersReducer';

export const rootReducer = combineReducers({
    tasks: tasksReducer,
    selectedTask: selectedTaskReducer,
    filters: taskFiltersReducer
});
