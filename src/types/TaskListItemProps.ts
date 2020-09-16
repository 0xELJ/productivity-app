import { TaskTime } from './TaskTime';
import { DraggableProvided } from 'react-beautiful-dnd';

export interface TaskListItemProps {
    id: number;
    title: string;
    description: string;
    durationTime: TaskTime;
    active: boolean;
    onSelect(id: number): void;
    innerRef(element?: HTMLElement | null): any;
    provided: DraggableProvided;
}
