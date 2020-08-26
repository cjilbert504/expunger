import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Menu extends React.Component {
    renderConditionalMenuItems = () => {
        console.log(Object.keys(this.props.users).length);
        if (Object.keys(this.props.users).length > 0) {
            return (
                <div>
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

export default connect(mapStateToProps)(Menu);