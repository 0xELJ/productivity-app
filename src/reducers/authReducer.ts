import { RequestStatus } from '../constants/RequestStatus';
import { SyncAction } from '../types/SyncAction';
import { ActionTypes } from '../constants/ActionTypes';
import { setItem } from '../utils/LocalStorage';
import { StorageKeys } from '../constants/StorageKeys';

const INITIAL_STATE = {
    status: RequestStatus.INACTIVE,
    token: ''
};

export const authReducer = (state = INITIAL_STATE, action: SyncAction) => {
    switch (action.type) {
        case ActionTypes.AUTH_LOGIN_PENDING:
            return { status: RequestStatus.PENDING, token: '' };
        case ActionTypes.AUTH_LOGIN_SUCCESS:
            setItem(StorageKeys.AUTH, { token: action.payload.accessToken, authenticated: true });
            return { status: RequestStatus.SUCCESSFUL, token: action.payload.accessToken };
        case ActionTypes.AUTH_LOGIN_ERROR:
            return { status: RequestStatus.FAILED, token: '' };
        default:
            return state;
    }
};
