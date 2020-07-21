import { Task } from '../types/Task';
import { TaskFilters } from '../constants/TaskFilters';

export function filterTasks(tasks: Task[], filter: TaskFilters) {
    switch (filter) {
        case TaskFilters.SHOW_ALL:
            return tasks;
        case TaskFilters.SHOW_SHORT:
            return tasks.filter(({ durationTime: { hours, minutes, seconds } }) => {
                return hours === 0 && (minutes <= 29 || (minutes === 30 && seconds === 0));
            });
        case TaskFilters.SHOW_MEDIUM:
            return tasks.filter(({ durationTime: { hours, minutes, seconds } }) => {
                return (hours === 0 && ((minutes === 30 && seconds > 0) || (minutes > 30 && minutes <= 59))) || (hours === 1 && minutes === 0 && seconds === 0);
            });
        case TaskFilters.SHOW_LONG:
            return tasks.filter(({ durationTime: { hours, minutes, seconds } }) => {
                return hours >= 1 && (minutes >= 0 || seconds >= 0);
            });
    }
}
