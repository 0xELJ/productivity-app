import React, { FC } from 'react';
import { Task } from '../../types/Task';
import { Card, ListGroup } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiTimer } from '@mdi/js';

const TaskListItem: FC<Task> = ({ name, description, timeLeft, active }) => {
    const activeItemClass = active ? 'text-white bg-primary' : '';

    return (
        <ListGroup.Item className={"d-flex justify-content-between mb-3 border-top rounded " + activeItemClass}>
            <div className="w-75">
                <Card.Title>{name}</Card.Title>
                <Card.Text className="w-100 d-inline-block text-truncate">{description}</Card.Text>
            </div>
            <div className="w-25 pl-1 align-self-end d-flex">
                <Icon path={mdiTimer} size={1} />
                <span className="ml-1">{timeLeft}</span>
            </div>
        </ListGroup.Item>
    );
};


export default TaskListItem;
