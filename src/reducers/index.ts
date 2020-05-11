import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { activeTaskReducer } from './activeTaskReducer';

export const rootReducer = combineReducers({
    tasks: tasksReducer,
    activeTask: activeTaskReducer
});
