import React, { FC } from 'react';
import { Dropdown } from 'react-bootstrap';
import TaskFilterLink from './TaskFilterLink';
import { TaskFilterListProps } from '../../types/TaskFilterListProps';

const TaskFilterList: FC<TaskFilterListProps> = ({ filters, currentFilter, onPressFilter }) => {
    const renderLinks = () => {
        return filters.map(({ filter, label }, index) => (
            <TaskFilterLink
                key={index}
                filter={filter}
                active={filter === currentFilter}
                onPress={onPressFilter}>
                {label}
            </TaskFilterLink>
        ));
    };

    return (
        <Dropdown className="ml-auto">
            <Dropdown.Toggle
                variant="info"
                size="sm"
                id="dropdown-duration">
                Duración
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {renderLinks()}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default TaskFilterList;
