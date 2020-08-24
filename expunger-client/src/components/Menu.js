import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="ui left fixed violet inverted vertical menu">
            <div className="item">
                <h4>EXPUNGER</h4>
            </div>
            <Link to="/feed" className="item">Feed</Link>
            <Link to="/profile" className="item">Profile</Link>
            <Link to="signup" className="item">Sign-Up</Link>
            <Link to="/login" className="item">Log In</Link>
            <Link to="/lougout" className="item">Log Out</Link>
        </div>
    )
}

export default Menu;