import React, { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { NavRoute } from '../../types/NavRoute';

const RouteGenerator: FC<{ routes: NavRoute[] }> = ({ routes }) => {
    const getRouteProps = (route: NavRoute) => {
        const { path, component: Component, exact, props } = route;
        let routeProps: RouteProps = { path, exact };

        if (props && Object.keys(props).length) {
            routeProps['render'] = renderProps => <Component {...renderProps} {...props} />
        } else {
            routeProps['component'] = Component;
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
                    let routeProps: RouteProps = getRouteProps(route);
                    return <Route key={route.path} {...routeProps} />;
                })
            }
        </>
    );
};

export default RouteGenerator;
