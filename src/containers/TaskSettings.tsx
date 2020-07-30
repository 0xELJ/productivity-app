import React, { FC } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useActions } from '../hooks/useActions';
import { fetchTasks } from '../actions/tasks';
import { removeItem } from '../utils/LocalStorage';
import { StorageKeys } from '../constants/StorageKeys';

const TaskSettings: FC = () => {
    const getTasks = useActions(fetchTasks, []);

    const onGetTasks = () => {
        getTasks();
    };

    const onCleanTasks = () => {
        removeItem(StorageKeys.TASKS);
        window.location.reload();
    };

    return (
        <Nav className="ml-auto mr-3">
            <NavDropdown title="Configuración " id="admin-dropdown">
                <NavDropdown.Item onClick={onGetTasks}>Generar tareas</NavDropdown.Item>
                <NavDropdown.Item onClick={onCleanTasks}>Borrar tareas</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};

export default TaskSettings;
