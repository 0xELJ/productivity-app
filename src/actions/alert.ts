import { SyncAction } from '../types/SyncAction';
import { ActionTypes } from '../constants/ActionTypes';

export const showAlert = (variant: 'success' | 'danger', heading: string, description: string): SyncAction => {
    return { type: ActionTypes.ALERT_SHOW, payload: { variant, heading, description } };
};

export const hideAlert = (): SyncAction => ({ type: ActionTypes.ALERT_HIDE });
