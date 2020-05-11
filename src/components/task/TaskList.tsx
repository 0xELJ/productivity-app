import React, { FC } from 'react';
import { Card, Dropdown, ListGroup } from 'react-bootstrap';

import { Task } from '../../types/Task';
import TaskListItem from './TaskListItem';

const TaskList: FC<{ title: string, tasks: Task[] }> = props => {
    const renderTasks = () => {
        if (!props.tasks.length) {
            return null;
        }
        return props.tasks.map(task => <TaskListItem key={task.id} {...task} />)
    };

    return (
        <Card className="task-list">
            <Card.Header className="task-list__header d-flex align-items-center">
                <span>{props.title}</span>
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
