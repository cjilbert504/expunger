import React from 'react';
import { connect } from 'react-redux';

import InputField from './InputField';
import { loginUser } from '../actions/users/loginUser';

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
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
        console.log(this.state.password);
        return (
            <div className="ui container" style={{ width: "600px", marginTop: "150px"}}>
                <div className="ui placeholder segment">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                            <div className="ui form">
                                <InputField outerDivClassName="field" label="Email" innerDivClassName="ui left icon input" inputType="text" inputPlaceholder="Email" inputName="email" inputValue={this.state.email} inputOnChange={this.onInputChange} iconClassName="user icon" />
                             
                                <InputField outerDivClassName="field" label="Password" innerDivClassName="ui left icon input" inputType="password" inputName="password" inputValue={this.state.password} inputOnChange={this.onInputChange} iconClassName="lock icon" />
                                
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