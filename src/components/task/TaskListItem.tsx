import React, { FC } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiTimer } from '@mdi/js';
import { formatTaskTime } from '../../utils/formatTaskTime';
import { TaskListItemProps } from '../../types/TaskListItemProps';

const TaskListItem: FC<TaskListItemProps> = ({ id, name, description, durationTime, active, onSelect }) => {
    const defaultClass = 'd-flex justify-content-between mb-3 border-top rounded';
    const taskClass = active ? `${defaultClass} text-white bg-primary` : defaultClass;

    const handleClick = () => {
        onSelect(id);
    };

    return (
        <ListGroup.Item onClick={handleClick} className={taskClass}>
            <div className="w-75">
                <Card.Title>{name}</Card.Title>
                <Card.Text className="w-100 d-inline-block text-truncate">{description}</Card.Text>
            </div>
            <div className="w-25 pl-1 align-self-end d-flex">
                <Icon path={mdiTimer} size={1} />
                <span className="ml-1">
                    {formatTaskTime(durationTime)}
                </span>
            </div>
        </ListGroup.Item>
    );
};


export default TaskListItem;
