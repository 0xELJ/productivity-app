import { RequestStatus } from '../constants/RequestStatus';
import { SyncAction } from '../types/SyncAction';
import { ActionTypes } from '../constants/ActionTypes';
import { removeItem, setItem } from '../utils/LocalStorage';
import { StorageKeys } from '../constants/StorageKeys';
import { AuthState } from '../types/AuthState';

const INITIAL_STATE: AuthState = {
    signUpStatus: RequestStatus.INACTIVE,
    signInStatus: RequestStatus.INACTIVE,
    authenticated: false,
};

export const authReducer = (state = INITIAL_STATE, action: SyncAction): AuthState => {
    switch (action.type) {
        case ActionTypes.AUTH_SIGN_UP_PENDING:
            return { ...state, signUpStatus: RequestStatus.PENDING };
        case ActionTypes.AUTH_SIGN_UP_SUCCESS:
            return { ...state, signUpStatus: RequestStatus.SUCCESSFUL };
        case ActionTypes.AUTH_SIGN_UP_ERROR:
            return { ...state, signUpStatus: RequestStatus.FAILED };
        case ActionTypes.AUTH_LOGIN_PENDING:
            return { ...state, signInStatus: RequestStatus.PENDING };
        case ActionTypes.AUTH_LOGIN_SUCCESS:
            setItem(StorageKeys.AUTH, { token: action.payload.accessToken, authenticated: true });
            return { ...state, signInStatus: RequestStatus.SUCCESSFUL, authenticated: true };
        case ActionTypes.AUTH_LOGIN_ERROR:
            return { ...state, signInStatus: RequestStatus.FAILED };
        case ActionTypes.AUTH_LOGOUT:
            removeItem(StorageKeys.AUTH);
            return INITIAL_STATE;
        default:
            return state;
    }
};
