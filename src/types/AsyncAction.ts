import { ActionTypes } from '../constants/ActionTypes';
import { AxiosRequestConfig } from 'axios';

export interface AsyncAction {
    types: ActionTypes[];
    request: AxiosRequestConfig;
    options?: {
        excludeToken: boolean
    };
}
