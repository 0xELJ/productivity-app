import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { NavRoute } from '../../types/NavRoute';
import RouteGenerator from '../shared/RouteGenerator';

const Home: FC<{ routes: NavRoute[] }> = ({ routes }) => {
    return (
        <>
            <Header />
                <Switch>
                    <RouteGenerator routes={routes} />
                </Switch>
            <Footer />
        </>
    );
};

export default Home;
