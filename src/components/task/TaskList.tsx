import React, { FC } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import TaskListItem from './TaskListItem';
import { TaskListProps } from '../../types/TaskListProps';
import TaskFilterList from './TaskFilterList';
import { TaskFilterOptions } from '../../constants/TaskFilterOptions';

const TaskList: FC<TaskListProps> = ({ title, tasks, onSelectTask, activeTaskId, onPressFilter, currentFilter }) => {
    const renderTasks = () => {
        if (!tasks.length) {
            return <p className="text-muted">No se han agregado tareas</p>;
        }
        return tasks.map((task, i) => {
            return (
                <TaskListItem
                    {...task}
                    key={task.id}
                    onSelect={onSelectTask}
                    active={task.id === activeTaskId}
                />
            );
        })
    };

    return (
        <Card className="task-list">
            <Card.Header className="task-list__header d-flex align-items-center">
                <span>{title}</span>
                <TaskFilterList filters={TaskFilterOptions} currentFilter={currentFilter} onPressFilter={onPressFilter} />
            </Card.Header>

            <Card.Body>
                <ListGroup className="task-list__body border-0">
                    {renderTasks()}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default TaskList;
