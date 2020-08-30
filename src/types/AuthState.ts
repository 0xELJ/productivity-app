import { RequestStatus } from '../constants/RequestStatus';

export interface AuthState {
    signUpStatus: RequestStatus;
    signInStatus: RequestStatus;
    authenticated: boolean;
}
