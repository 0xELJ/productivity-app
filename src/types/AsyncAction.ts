import { ActionTypes } from '../constants/ActionTypes';
import { AxiosRequestConfig } from 'axios';

export interface AsyncAction {
    types: [ActionTypes | null, ActionTypes | null, ActionTypes | null];
    request: AxiosRequestConfig;
    options?: {
        excludeToken: boolean
    };
}
