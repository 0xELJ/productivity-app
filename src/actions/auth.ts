import { AsyncAction } from '../types/AsyncAction';
import { ActionTypes } from '../constants/ActionTypes';
import { AuthCredentials } from '../types/AuthCredentials';
import { SyncAction } from '../types/SyncAction';
import { NewAccount } from '../types/NewAccount';

export const signUp = (account: NewAccount): AsyncAction => {
    return {
        types: [
            ActionTypes.AUTH_SIGN_UP_PENDING,
            ActionTypes.AUTH_SIGN_UP_SUCCESS,
            ActionTypes.AUTH_SIGN_UP_ERROR
        ],
        request: {
            method: 'POST',
            url: '/auth/signup',
            data: account
        },
        options: { excludeToken: true }
    };
};

export const signIn = (credentials: AuthCredentials): AsyncAction => {
    return {
        types: [
            ActionTypes.AUTH_LOGIN_PENDING,
            ActionTypes.AUTH_LOGIN_SUCCESS,
            ActionTypes.AUTH_LOGIN_ERROR
        ],
        request: {
            method: 'POST',
            url: '/auth/signin',
            data: credentials
        },
        options: { excludeToken: true }
    };
};

export const signOut = (): SyncAction => ({ type: ActionTypes.AUTH_LOGOUT });
