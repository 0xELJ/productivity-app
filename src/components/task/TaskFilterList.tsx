import React, { FC } from 'react';
import { Dropdown } from 'react-bootstrap';
import { TaskFilters } from '../../constants/TaskFilters';
import TaskFilterLink from './TaskFilterLink';

interface TaskFilterListProps {
    filters: readonly { filter: TaskFilters, label: string }[];
    currentFilter: TaskFilters,
    onPressFilter(filter: TaskFilters): void;
}

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
                variant="secondary"
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
