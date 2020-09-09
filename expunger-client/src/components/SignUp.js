import React from 'react';
import { connect } from 'react-redux';

import InputField from './InputField';
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
                        <InputField outerDivClassName="field" label="Username" innerDivClassName="ui left icon input" inputType="text" inputName="username" inputValue={this.state.username} inputOnChange={this.onInputChange} iconClassName="user icon" />
                  
                        <InputField outerDivClassName="field" label="Email" innerDivClassName="ui left icon input" inputType="email" inputName="email" inputValue={this.state.email} inputOnChange={this.onInputChange} iconClassName="envelope icon" />
                     
                        <InputField outerDivClassName="field" label="Password" innerDivClassName="ui left icon input" inputType="password" inputName="password" inputValue={this.state.password} inputOnChange={this.onInputChange} iconClassName="lock icon" />
                       
                        <InputField outerDivClassName="field" label="Password Confirmation" innerDivClassName="ui left icon input" inputType="password" inputName="password_confirmation" inputValue={this.state.password_confirmation} inputOnChange={this.onInputChange} iconClassName="lock icon" />

                        <div className="ui blue submit button" onClick={this.onFormSubmit}>Sign-Up</div>
                    </div>
                </div>
            </div>
        );
    };
};

export default connect(null, { addUser })(SignUp);