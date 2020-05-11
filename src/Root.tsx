import React, { FC } from 'react';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, {});

export const Root: FC = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
