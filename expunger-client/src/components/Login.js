import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends React.Component {
    render() {
        return (
            <div className="ui container" style={{ width: "600px", marginTop: "250px"}}>
                <div className="ui placeholder segment">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                            <div className="ui form">
                                <div className="field">
                                    <label>Username</label>
                                    <div className="ui left icon input">
                                        <input type="text" placeholder="Username" />
                                        <i className="user icon"></i>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <div className="ui left icon input">
                                        <input type="password" />
                                        <i className="lock icon"></i>
                                    </div>
                                </div>
                                <div className="ui blue submit button">Login</div>
                            </div>
                        </div>
                        <div className="middle aligned column">
                            <div className="ui big button" onClick={() => this.props.history.push("/signup")}>
                                <i className="signup icon"></i>
                                Sign-Up
                            </div>
                        </div>
                    </div>
                    <div className="ui vertical divider">
                        Or
                    </div>
                </div>
            </div>
        )
    };
};

export default connect(null)(Login);