import React, { FC } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';
import { rootReducer } from './reducers';
import { getItem } from './utils/LocalStorage';
import { HttpMiddleware } from './middlewares/HttpMiddleware';
import { StorageKeys } from './constants/StorageKeys';
import { RequestStatus } from './constants/RequestStatus';

const auth = getItem(StorageKeys.AUTH);
const persistedState = { auth: { status: RequestStatus.INACTIVE,  authenticated: auth?.authenticated } };
const store = createStore(rootReducer, persistedState, applyMiddleware(ReduxThunk, HttpMiddleware(axios)));

export const Root: FC = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
