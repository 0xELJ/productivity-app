import { TaskTime } from './TaskTime';
import { DraggableProvided } from 'react-beautiful-dnd';

export interface TaskListItemProps {
    id: string;
    name: string;
    description: string;
    durationTime: TaskTime;
    active: boolean;
    onSelect(id: string): void;
    innerRef(element?: HTMLElement | null): any;
    provided: DraggableProvided;
}
