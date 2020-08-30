import React, { FC } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useActions } from '../hooks/useActions';
import { signOut } from '../actions/auth';

const TaskSettings: FC = () => {
    const logout = useActions(signOut, []);

    const onLogout = () => {
        logout();
    };

    return (
        <Nav className="ml-auto mr-3">
            <NavDropdown title="Account " id="admin-dropdown">
                <NavDropdown.Item onClick={() => {}}>Settings</NavDropdown.Item>
                <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};

export default TaskSettings;
