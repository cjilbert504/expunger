import React from 'react';
import Feed from './Feed';
import Menu from './Menu';

const App = () => {
    return (
        <div>
            <Menu />
            <div className="ui container">
                <Feed />
            </div>
        </div>
    );
};

export default App;