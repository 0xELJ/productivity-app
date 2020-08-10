import { Middleware } from 'redux';
import { AxiosInstance } from 'axios';
import { AsyncAction } from '../types/AsyncAction';
import { getItem } from '../utils/LocalStorage';
import { StorageKeys } from '../constants/StorageKeys';

export const HttpMiddleware = (axios: AxiosInstance): Middleware => api => next => action => {
    if (typeof action === 'function') {
        return action(api.dispatch, api.getState);
    }

    const { types, request, options, ...rest }: AsyncAction = action;

    if (!request) {
        return next(action);
    }

    const [PENDING, SUCCESS, ERROR] = types;
    next({ ...rest, type: PENDING });

    let authData = getItem(StorageKeys.AUTH);
    let requestConfig = { ...request, headers: { Authorization: `Bearer: ${authData.token}` } };

    if (options?.excludeToken) {
        delete requestConfig.headers.Authorization;
    }

    return axios.request(requestConfig)
        .then(result => {
            return next({ ...rest, payload: result, type: SUCCESS });
        })
        .catch(error => {
            console.error('MIDDLEWARE ERROR', error);
            return next({ ...rest, error, type: ERROR });
        })
};
