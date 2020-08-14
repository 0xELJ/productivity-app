import { RequestStatus } from '../constants/RequestStatus';
import { SyncAction } from '../types/SyncAction';
import { ActionTypes } from '../constants/ActionTypes';
import { removeItem, setItem } from '../utils/LocalStorage';
import { StorageKeys } from '../constants/StorageKeys';
import { AuthState } from '../types/AuthState';

const INITIAL_STATE: AuthState = {
    status: RequestStatus.INACTIVE,
    authenticated: false
};

export const authReducer = (state = INITIAL_STATE, action: SyncAction): AuthState => {
    switch (action.type) {
        case ActionTypes.AUTH_LOGIN_PENDING:
            return { ...state, status: RequestStatus.PENDING };
        case ActionTypes.AUTH_LOGIN_SUCCESS:
            setItem(StorageKeys.AUTH, { token: action.payload.accessToken, authenticated: true });
            return { status: RequestStatus.SUCCESSFUL, authenticated: true };
        case ActionTypes.AUTH_LOGIN_ERROR:
            return { ...state, status: RequestStatus.FAILED };
        case ActionTypes.AUTH_LOGOUT:
            removeItem(StorageKeys.AUTH);
            return INITIAL_STATE;
        default:
            return state;
    }
};
