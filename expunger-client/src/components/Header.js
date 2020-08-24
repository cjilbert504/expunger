import React from 'react';

const Header = (props) => {
    return (
        <h4 className="ui violet header">{props.username}</h4>
    )
};

export default Header;