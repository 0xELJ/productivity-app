import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { NavRoute } from './types/NavRoute';
import { Root } from './Root';
import SignInPage from './components/auth/SignInPage';
import SignUpPage from './components/auth/SignUpPage';
import Home from './components/layout/Home';
import Tasks from './containers/Tasks';
import Reports from './containers/Reports';
import RouteGenerator from './components/shared/RouteGenerator';

function App() {
    const [routes] = useState<NavRoute[]>([
        {
            name: 'Login',
            path: '/login',
            component: SignInPage
        },
        {
            name: 'Create Account',
            path: '/new-account',
            component: SignUpPage
        },
        {
            name: 'Home',
            path: '/app',
            component: Home,
            props: {
                routes: [
                    {
                        name: 'Tasks',
                        path: '/app',
                        component: Tasks,
                        exact: true
                    },
                    {
                        name: 'Reports',
                        path: '/app/reports',
                        component: Reports,
                    }
                ]
            }
        }
    ]);

    return (
        <Root>
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <RouteGenerator routes={routes} />
                </Switch>
            </Router>
        </Root>
    );
}

export default App;
