import React, { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { NavRoute } from '../../types/NavRoute';
import PrivateRoute from './PrivateRoute';
import { useGlobalState } from '../../hooks/useGlobalState';

const RouteGenerator: FC<{ routes: NavRoute[] }> = ({ routes }) => {
    const authenticated = useGlobalState(({ auth }) => auth.authenticated);

    const getRouteProps = (route: NavRoute) => {
        const { path, component, exact, props } = route;
        let routeProps: RouteProps = { path, component, exact };

        if (props && Object.keys(props).length) {
            routeProps.component = () => React.createElement(component, props);
        }

        return routeProps;
    };

    if (!routes.length) {
        return null;
    }

    return (
        <>
            {
                routes.map(route => {
                    let routeProps = getRouteProps(route);
                    if (route.isPrivate) {
                        return (
                            <PrivateRoute
                                {...routeProps}
                                key={route.path}
                                isAuthenticated={authenticated}
                                unauthorizedPath="/login"
                            />
                        );
                    }
                    return <Route key={route.path} {...routeProps} />;
                })
            }
        </>
    );
};

export default RouteGenerator;
