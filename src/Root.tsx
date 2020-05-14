import React, { FC } from 'react';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';
import { LocalStorage } from './utils/LocalStorage';
import { StorageKeys } from './constants/StorageKeys';
import throttle from 'lodash/throttle';

const localStorage = new LocalStorage();
const persistedState = localStorage.getItem(StorageKeys.TASKS);
const store = createStore(rootReducer, persistedState);

store.subscribe(throttle(() => {
    localStorage.setItem(StorageKeys.TASKS, {
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
