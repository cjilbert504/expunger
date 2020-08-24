import React from 'react';

class SignUp extends React.Component {
    render() {
        return (
            <div className="ui container" style={{ width: "400px", marginTop: "250px"}}>
                <form className="ui form purple segment">
                    <div className="field">
                        <label>Username</label>
                        <input type="text"></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text"></input>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="text"></input>
                    </div>
                    <div className="field">
                        <label>Password Confirmation</label>
                        <input type="text"></input>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    };
};

export default SignUp;