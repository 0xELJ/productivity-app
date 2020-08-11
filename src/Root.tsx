import React, { FC } from 'react';
import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';
import { getItem, setItem } from './utils/LocalStorage';
import { StorageKeys } from './constants/StorageKeys';
import throttle from 'lodash/throttle';
import ReduxThunk from 'redux-thunk';
import { HttpMiddleware } from './middlewares/HttpMiddleware';

const persistedState = getItem(StorageKeys.TASKS);
const store = createStore(rootReducer, persistedState, applyMiddleware(ReduxThunk, HttpMiddleware(axios)));

store.subscribe(throttle(() => {
    setItem(StorageKeys.TASKS, {
        tasks: store.getState().tasks
    });
}, 1000));

export const Root: FC = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
