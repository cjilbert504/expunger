import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Feed from './Feed';
import Menu from './Menu';
import SignUp from './SignUp';
import Login from './Login';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Menu />
                <Route path="/" exact component={localStorage.getItem("token") ? Feed : Login} />
                <Route path="/feed" exact component={Feed} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/login" exact component={Login} />
            </BrowserRouter>
        </div>
    );
};

export default App;