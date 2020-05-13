import { Task } from '../types/Task';
import { ActionTypes } from '../constants/ActionTypes';
import { Action } from '../types/Action';

const INITIAL_STATE: Task | null = {
    id: '1',
    name: 'Card Title 1',
    description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
    durationTime: { hours: 1, minutes: 15, seconds: 15 },
    timeLeft: { hours: 0, minutes: 50, seconds: 33 },
    active: true,
    createdAt: '15/10/2019',
    enabled: true,
};

export function activeTaskReducer(state = INITIAL_STATE, action: Action): Task | null {
    switch (action.type) {
        case ActionTypes.TASK_SET_ACTIVE:
            return { ...action.payload };
        default:
            return state;
    }
}
