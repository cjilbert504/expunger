import React from 'react';
import { connect } from 'react-redux';
import { addBlerb } from '../actions';


class BlerbWriter extends React.Component {
    state = {
        blerb: ""
    };

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.addBlerb(this.state, this.props.users);

        this.setState({
            blerb: ""
        });
    };

    render() {
        return (
            <div className="ui fluid action transparent input">
                <input type="text" placeholder="Choose your words wisely..." name="blerb" value={this.state.blerb} onChange={this.onInputChange} />
                <div onClick={this.onFormSubmit} className="ui blue button">Blabber about it</div>
            </div>
        );
    }
};

const mapStateToProps = ({ users }) => {
    return { users }
};

export default connect(mapStateToProps, { addBlerb } )(BlerbWriter);