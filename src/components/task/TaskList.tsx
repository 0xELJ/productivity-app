import React, { FC } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import TaskListItem from './TaskListItem';
import { TaskListProps } from '../../types/TaskListProps';
import TaskFilterList from './TaskFilterList';
import { TaskFilterOptions } from '../../constants/TaskFilterOptions';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

const TaskList: FC<TaskListProps> = props => {
    const { title, tasks, onSelectTask, activeTaskId, onPressFilter, currentFilter, onDragEnd, disableDrop } = props;

    const handleDragEnd = ({ source, destination }: DropResult) => {
        if (!destination) {
            return;
        }
        onDragEnd(tasks[source.index].id.toString(), tasks[destination.index].id.toString());
    };

    const renderTasks = () => {
        if (!tasks.length) {
            return <p className="text-muted">No se han agregado tareas</p>;
        }
        return tasks.map((task, i) => {
            return (
                <Draggable key={task.id} draggableId={task.id.toString()} index={i}>
                    {(provided, snapshot) => (
                        <TaskListItem
                            {...task}
                            key={task.id}
                            innerRef={provided.innerRef}
                            provided={provided}
                            onSelect={onSelectTask}
                            active={task.id === activeTaskId}
                        />
                    )}
                </Draggable>
            );
        })
    };

    return (
        <Card className="task-list">
            <Card.Header className="task-list__header d-flex align-items-center bg-light border-0">
                <span>{title}</span>
                <TaskFilterList
                    filters={TaskFilterOptions}
                    currentFilter={currentFilter}
                    onPressFilter={onPressFilter}
                />
            </Card.Header>

            <Card.Body className="bg-light">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable isDropDisabled={disableDrop || false} droppableId="droppable">
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <ListGroup className="task-list__body border-0">
                                    {renderTasks()}
                                </ListGroup>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </Card.Body>
        </Card>
    );
};

export default TaskList;
