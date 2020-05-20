import React, { FC } from 'react';
import { Dropdown } from 'react-bootstrap';
import { TaskFilters } from '../../constants/TaskFilters';

const TaskFilterLink: FC<{ filter: TaskFilters, active: boolean, onPress(filter: TaskFilters): void }> = ({ filter, children, active, onPress }) => {
    return (
        <Dropdown.Item onClick={() => onPress(filter)} active={active}>
            {children}
        </Dropdown.Item>
    );
};

export default TaskFilterLink;
