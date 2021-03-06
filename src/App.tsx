import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Tasks from './containers/Tasks';
import Reports from './containers/Reports';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Root } from './Root';

function App() {
    return (
        <Root>
            <Router>
                <>
                    <Header />
                    <Switch>
                        <Redirect exact from="/" to="/tareas" />
                        <Route path="/tareas" component={Tasks} />
                        <Route path="/reportes" component={Reports} />
                    </Switch>
                    <Footer />
                </>
            </Router>
        </Root>
    );
}

export default App;
