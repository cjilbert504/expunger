import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Feed from './Feed';
import Menu from './Menu';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Menu />
                <Route path="/feed" exact component={Feed} />
            </BrowserRouter>
        </div>
    );
};

export default App;