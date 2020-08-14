import { SyncAction } from '../types/SyncAction';
import { AlertState } from '../types/AlertState';
import { ActionTypes } from '../constants/ActionTypes';

const INITIAL_STATE: AlertState = {
    show: false,
    variant: 'success',
    heading: '',
    description: ''
};

export const alertReducer = (state = INITIAL_STATE, action: SyncAction): AlertState => {
  switch (action.type) {
      case ActionTypes.ALERT_SHOW:
          const { variant, heading, description } = action.payload;
          return { show: true, variant, heading, description };
      case ActionTypes.ALERT_HIDE:
          return INITIAL_STATE;
      default:
          return state;
  }
};
