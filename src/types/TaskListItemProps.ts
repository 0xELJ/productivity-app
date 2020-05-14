import { TaskTime } from './TaskTime';

export interface TaskListItemProps {
    id: string;
    name: string;
    description: string;
    durationTime: TaskTime;
    active: boolean;
    onSelect(id: string): void;
}
