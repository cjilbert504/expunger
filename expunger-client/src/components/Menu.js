import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="ui left fixed violet inverted vertical menu">
            <div className="item">
                <h4>
                    <Link to="/" className="item">EXPUNGER</Link>
                </h4>
            </div>
            <Link to="/feed" className="item">Feed</Link>
            <Link to="/profile" className="item">Profile</Link>
            <Link to="/signup" className="item">Sign-Up</Link>
            <Link to="/login" className="item">Log In</Link>
            <Link to="/logout" className="item">Log Out</Link>
        </div>
    )
}

export default Menu;