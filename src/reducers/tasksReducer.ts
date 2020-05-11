import { Task } from '../types/Task';
import { TasksState } from '../types/TasksState';
import { Action } from '../types/Action';

const tasks: Task[] = [
    {
        id: '1',
        name: 'Card Title 1',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: true,
        createdAt: '15/10/2019',
        enabled: true,
    },
    {
        id: '2',
        name: 'Card Title 2',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: false,
        createdAt: '15/10/2019',
        enabled: true,
    },
    {
        id: '3',
        name: 'Card Title 3',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: false,
        createdAt: '15/10/2019',
        enabled: true,
    },
    {
        id: '4',
        name: 'Card Title 4',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: false,
        createdAt: '15/10/2019',
        enabled: true,
    },
    {
        id: '5',
        name: 'Card Title 5',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: false,
        createdAt: '15/10/2019',
        enabled: true,
    },
];

const INITIAL_STATE: TasksState = {
    pending: tasks,
    completed: []
};

export function tasksReducer(state = INITIAL_STATE, action: Action): TasksState {
    switch (action.type) {
        default:
            return state;
    }
}
