import React, { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { NavRoute } from '../../types/NavRoute';

const RouteGenerator: FC<{ routes: NavRoute[] }> = ({ routes }) => {
    if (!routes.length) {
        return null;
    }

    return (
        <>
            {
                routes.map(({ path, component: Component, props, exact }) => {
                    let routeProps: RouteProps = { path, exact };
                    if (props && Object.keys(props).length) {
                        routeProps['render'] = renderProps => <Component {...renderProps} {...props} />
                    } else {
                        routeProps['component'] = Component;
                    }
                    return <Route {...routeProps} />;
                })
            }
        </>
    );
};

export default RouteGenerator;
