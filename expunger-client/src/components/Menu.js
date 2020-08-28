import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { currentUser } from '../actions';

class Menu extends React.Component {
    componentDidMount() {
        const token = localStorage.getItem("token")
        if (token) {
            this.props.currentUser(token);
          }
    };

    renderConditionalMenuItems = () => {
        if (Object.keys(this.props.users).length > 0) {
            return (
                <div>
                    <div className="item">Welcome, {this.props.users.username}!</div>
                    <Link to="/feed" className="item">Feed</Link>
                    {/* <Link to="/profile" className="item">Profile</Link> */}
                    <Link to="/logout" className="item">Log Out</Link>
                </div>
            )
        } else {
            return (
                <div>
                    {/* <Link to="/profile" className="item">Profile</Link> */}
                    <Link to="/signup" className="item">Sign-Up</Link>
                    <Link to="/login" className="item">Log In</Link>
                    <Link to="/logout" className="item">Log Out</Link>
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

const mapStateToProps = ({ users }) => {
    return { users }
}

export default connect(mapStateToProps, { currentUser })(Menu);