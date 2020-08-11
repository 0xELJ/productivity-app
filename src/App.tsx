import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { NavRoute } from './types/NavRoute';
import { Root } from './Root';
import SignInPage from './components/auth/SignInPage';
import SignUpPage from './components/auth/SignUpPage';
import Home from './components/layout/Home';
import Tasks from './containers/Tasks';
import Reports from './containers/Reports';
import RouteGenerator from './components/shared/RouteGenerator';
import { getItem } from './utils/LocalStorage';
import { StorageKeys } from './constants/StorageKeys';

function App() {
    const [userAuthenticated, setUserAuthenticated] = useState<boolean>(false);
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
            isPrivate: true,
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

    useEffect(() => {
        const authData = getItem(StorageKeys.AUTH);
        setUserAuthenticated(authData?.authenticated);
    }, []);

    return (
        <Root>
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <RouteGenerator routes={routes} isAuthenticated={userAuthenticated} />
                </Switch>
            </Router>
        </Root>
    );
}

export default App;
