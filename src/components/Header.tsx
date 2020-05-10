import React, { FC } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: FC<any> = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/" className="ml-3">Productivity App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link as={Link} to="/tareas">Tareas</Nav.Link>
                    <Nav.Link as={Link} to="/reportes">Reportes</Nav.Link>
                </Nav>
                <Nav className="ml-auto mr-3">
                    <NavDropdown title="Configuración " id="admin-dropdown">
                        <NavDropdown.Item>Generar datos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
