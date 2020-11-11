import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from '../../components/errorPage/errorPage';
import LandingPage from '../../components/landingPage/landingPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='*' component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;   