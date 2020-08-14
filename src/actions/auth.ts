import { AsyncAction } from '../types/AsyncAction';
import { ActionTypes } from '../constants/ActionTypes';
import { AuthCredentials } from '../types/AuthCredentials';
import { SyncAction } from '../types/SyncAction';

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
