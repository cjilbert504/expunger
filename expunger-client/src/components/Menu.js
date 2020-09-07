import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { currentUser } from '../actions/users/currentUser';
import { logoutUser } from '../actions/users/logoutUser';

class Menu extends React.Component {
    componentDidMount() {
        const token = localStorage.getItem("token")
        if (token) {
            this.props.currentUser(token);
          }
    };

    renderConditionalMenuItems = () => {
        if (Object.keys(this.props.user).length > 0) {
            return (
                <div>
                    <div className="item">Welcome, {this.props.user.username}!</div>
                    <Link to="/feed" className="item">Feed</Link>
                    <Link to="/" className="item" onClick={() => this.props.logoutUser(this.props.user.id)}>Log Out</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/signup" className="item">Sign-Up</Link>
                    <Link to="/login" className="item">Log In</Link>
                </div>
            )
        }

    }

    render() {
        return (
            <div className="ui left fixed violet inverted vertical menu">
                <div className="item">
                    <h4>
                        <Link to="/" className="item">EXPUNGER</Link>
                    </h4>
                </div>
                { this.renderConditionalMenuItems() }
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps, { currentUser, logoutUser })(Menu);