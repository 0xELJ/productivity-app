import { Middleware } from 'redux';
import { AxiosInstance } from 'axios';
import { AsyncAction } from '../types/AsyncAction';
import { StorageKeys } from '../constants/StorageKeys';
import { getItem } from '../utils/LocalStorage';
import { ActionTypes } from '../constants/ActionTypes';

const BASE_URL = 'http://localhost:5000';

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
    let requestConfig = {
        ...request,
        headers: { Authorization: `Bearer ${authData?.token}` },
        baseURL: BASE_URL
    };

    if (options?.excludeToken) {
        delete requestConfig.headers.Authorization;
    }

    return axios.request(requestConfig)
        .then(result => {
            return next({ ...rest, payload: result.data, type: SUCCESS });
        })
        .catch(error => {
            console.error('MIDDLEWARE ERROR', error);
            const { error: heading, message: description } = error.response.data;
            next({ type: ActionTypes.ALERT_SHOW, payload: { variant: 'danger', heading , description } });
            return next({ ...rest, error, type: ERROR });
        })
};
