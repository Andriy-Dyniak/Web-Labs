import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
