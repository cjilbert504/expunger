import React from 'react';
import { connect } from 'react-redux';

import { addUser } from '../actions';

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
            <div className="ui container" style={{ width: "400px", marginTop: "250px"}}>
                <form onSubmit={this.onFormSubmit} className="ui form purple segment">
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" value={this.state.username} onChange={this.onInputChange}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" value={this.state.email} onChange={this.onInputChange}></input>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="text" name="password" value={this.state.password} onChange={this.onInputChange}></input>
                    </div>
                    <div className="field">
                        <label>Password Confirmation</label>
                        <input type="text" name="password_confirmation" value={this.state.password_confirmation} onChange={this.onInputChange}></input>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    };
};

export default connect(null, { addUser })(SignUp);