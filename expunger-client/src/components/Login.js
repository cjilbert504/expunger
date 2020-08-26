import React from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions';

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.loginUser(this.state, () => {
            this.props.history.push("/feed");
        });

        this.setState({
            email: "",
            password: ""
        });
    };

    render() {
        return (
            <div className="ui container" style={{ width: "600px", marginTop: "250px"}}>
                <div className="ui placeholder segment">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                            <div className="ui form">
                                <div className="field">
                                    <label>Email</label>
                                    <div className="ui left icon input">
                                        <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.onInputChange} />
                                        <i className="user icon"></i>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <div className="ui left icon input">
                                        <input type="password" name="password" value={this.state.password} onChange={this.onInputChange} />
                                        <i className="lock icon"></i>
                                    </div>
                                </div>
                                <div className="ui blue submit button" onClick={this.onFormSubmit}>Login</div>
                            </div>
                        </div>
                        <div className="middle aligned column">
                            <div className="ui blue big button" onClick={() => this.props.history.push("/signup")}>
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

export default connect(null, { loginUser })(Login);