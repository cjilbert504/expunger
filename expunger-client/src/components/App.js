import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Feed from './Feed';
import Menu from './Menu';
import SignUp from './SignUp';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Menu />
                <Route path="/feed" exact component={Feed} />
                <Route path="/signup" exact component={SignUp} />
            </BrowserRouter>
        </div>
    );
};

export default App;