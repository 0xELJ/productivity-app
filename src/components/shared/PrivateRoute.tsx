import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { PrivateRouteProps } from '../../types/PrivateRouteProps';

const PrivateRoute: FC<PrivateRouteProps> = props => {
    const redirectPath = !props.isAuthenticated ? props.unauthorizedPath : '';

    if (redirectPath) {
        return <Redirect to={redirectPath} />;
    }

    return <Route {...props} />;
};

export default PrivateRoute;
