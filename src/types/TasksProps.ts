import { Task } from './Task';
import { Action } from './Action';

export interface TasksProps {
    tasks: Task[];
    setSelectedTask(id: string): Action
}
