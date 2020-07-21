import { v4 as uuid } from 'uuid';
import { Todo } from '../types/Todo';
import { Task } from '../types/Task';
import { TaskTime } from '../types/TaskTime';

export function generateTasks (todos: Todo[]): Task[] {
    return todos.map(todo => {
        const id = uuid();
        const { name, description } = generateDetails(todo.title);
        const durationTime = generateRandomTime();
        const timeLeft = generateRandomTime(durationTime);
        const createdAt = generateRandomDate();

        return { id, name, description, durationTime, timeLeft, createdAt, active: false, enabled: !todo.completed };
    })
}

function generateDetails (title: string) {
    const [ firstWord ] = title.split(' ');
    return { name: firstWord, description: title };
}

function generateRandomDate () {
    const start = new Date();
    start.setDate(start.getDate() - 7);
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString();
}

function generateRandomTime (limit?: TaskTime): TaskTime {
    let hours = 0, minutes = 0, seconds = 0;
    if (limit) {
        hours = getRandomInt(0, limit.hours);
        minutes = getRandomInt(0, limit.minutes);
        seconds = getRandomInt(0, limit.seconds);
    } else {
        hours = getRandomInt(0, 2);
        minutes = getRandomInt(0, 59);
        seconds = getRandomInt(0, 59);
        if (hours === 2) {
            minutes = 0;
            seconds = 0;
        } else if (hours === 0 && minutes === 0) {
            minutes = getRandomInt(1, 59);
        }
    }
    return { hours, minutes, seconds };
}

function getRandomInt (min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
