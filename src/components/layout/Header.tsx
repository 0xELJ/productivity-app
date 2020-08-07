import React, { FC } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TaskSettings from '../../containers/TaskSettings';

const Header: FC<any> = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/" className="ml-3">Productivity App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="ml-3">
                <Nav>
                    <Nav.Link as={Link} to="/app">Tareas</Nav.Link>
                    <Nav.Link as={Link} to="/app/reports">Reportes</Nav.Link>
                </Nav>
                <TaskSettings />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
