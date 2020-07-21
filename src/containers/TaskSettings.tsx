import React, { FC } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/tasks';
import { removeItem } from '../utils/LocalStorage';
import { StorageKeys } from '../constants/StorageKeys';

const TaskSettings: FC<{ getTasks(): any }> = props => {
    const onGetTasks = () => {
        props.getTasks();
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

export default connect(null, { getTasks: fetchTasks })(TaskSettings);
