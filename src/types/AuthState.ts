import { RequestStatus } from '../constants/RequestStatus';

export interface AuthState {
    status: RequestStatus;
    authenticated: boolean;
}
