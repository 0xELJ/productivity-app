import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { PrivateRouteProps } from '../../types/PrivateRouteProps';

const PrivateRoute: FC<PrivateRouteProps> = ({ isAuthenticated, unauthorizedPath, component, ...props }) => {
    return (
        <Route
            {...props}
            render={routeProps => {
                if (isAuthenticated && component) {
                    return React.createElement(component, routeProps);
                } else {
                    return <Redirect to={unauthorizedPath} />;
                }
            }}
        />
    );
};

export default PrivateRoute;
