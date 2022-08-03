import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import HelpSearch from '../pages/help-search';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch >
                <Route exact path='/' component={Home} />
                <Route path='/search' component={HelpSearch} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes