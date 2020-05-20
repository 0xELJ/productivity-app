import { Task } from './Task';
import { Action } from './Action';

export interface TasksProps {
    pendingTasks: Task[];
    completedTasks: Task[];
    setSelectedTask(id: string): Action
}
