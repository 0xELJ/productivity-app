import React, { FC } from 'react';
import { Card, Dropdown, ListGroup } from 'react-bootstrap';
import TaskListItem from './TaskListItem';
import { TaskListProps } from '../../types/TaskListProps';

const TaskList: FC<TaskListProps> = ({ title, tasks, onSelectTask, activeTaskId }) => {
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
                <Dropdown className="ml-auto">
                    <Dropdown.Toggle
                        variant="secondary"
                        size="sm"
                        className="text-dark bg-white"
                        id="dropdown-duration">
                        Duración
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Cualquiera</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Cortas</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Medianas</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Largas</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
