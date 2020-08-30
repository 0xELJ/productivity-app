import { ActionTypes } from '../constants/ActionTypes';

export interface SyncAction {
    type: ActionTypes;
    payload?: any;
}
