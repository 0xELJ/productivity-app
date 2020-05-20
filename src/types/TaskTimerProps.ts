import { Task } from './Task';
import { TaskTime } from './TaskTime';

export interface TaskTimerProps {
    activeTask?: Task;
    finishTask(time: TaskTime): any;
    patchTask(task: Task): any;
}
