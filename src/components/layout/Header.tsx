import React, { FC } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TaskSettings from '../../containers/TaskSettings';
import { NavRoute } from '../../types/NavRoute';

const Header: FC<{ routes: NavRoute[] }> = ({ routes }) => {
    const renderNavLinks = () => {
        if (!routes.length) {
            return null;
        }

        return (
            <Nav>
                {
                    routes.map(({ path, name }) => (
                        <Nav.Link key={path} as={Link} to={path}>
                            {name}
                        </Nav.Link>
                    ))
                }
            </Nav>
        );
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/" className="ml-3">Productivity App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="ml-3">
                {renderNavLinks()}
                <TaskSettings />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
