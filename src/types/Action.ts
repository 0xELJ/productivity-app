import { ActionTypes } from '../constants/ActionTypes';

export interface Action {
    type: ActionTypes;
    payload?: any;
}
