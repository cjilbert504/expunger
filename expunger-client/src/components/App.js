import React from 'react';
import Feed from './Feed';
import Menu from './Menu';

const App = () => {
    return (
        <div className="ui container">
            <Menu />
            <Feed />
        </div>
    );
};

export default App;