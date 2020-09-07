import React from 'react';
import { connect } from 'react-redux';

import { addUser } from '../actions/users/addUser';

class SignUp extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    };

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.addUser(this.state, () => {
            this.props.history.push("/feed");
        });

        this.setState({
            username: "",
            email: "",
            password: "",
            password_confirmation: ""
        });
    };

    render() {
        return (
            <div className="ui container" style={{ width: "600px", marginTop: "150px"}}>
                <div className="ui placeholder segment">
                    <div className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <div className="ui left icon input">
                                <input type="text" name="username" value={this.state.username} onChange={this.onInputChange}></input>
                                <i className="user icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <div className="ui left icon input">
                                <input type="email" name="email" value={this.state.email} onChange={this.onInputChange}></input>
                                <i className="envelope icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <div className="ui left icon input">
                                <input type="password" name="password" value={this.state.password} onChange={this.onInputChange}></input>
                                <i className="lock icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            <label>Password Confirmation</label>
                            <div className="ui left icon input">
                                <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.onInputChange}></input>
                                <i className="lock icon"></i>
                            </div>
                        </div>
                        <div className="ui blue submit button" onClick={this.onFormSubmit}>Sign-Up</div>
                    </div>
                </div>
            </div>
        );
    };
};

export default connect(null, { addUser })(SignUp);