import { Task } from './Task';

export interface TaskListProps {
    title: string;
    tasks: Task[];
    onSelectTask(id: string): void;
}
