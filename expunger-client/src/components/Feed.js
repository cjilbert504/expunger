import React from 'react';
import { connect } from 'react-redux';
import { getBlerbs } from '../actions';

class Feed extends React.Component {
    componentDidMount() {
        this.props.getBlerbs();
    };

    renderBlerbs() {                             // Extract this out to a presentional component
        console.log(this.props.blerbs);
        return this.props.blerbs.map(blerb => {
            return (
                <div className="ui violet message" key={blerb.id}>
                    <h4 className="ui violet header">{blerb.attributes.user.username}</h4>
                    {/* <h6 className="ui violet right aligned header">{blerb.attributes.user.created_at}</h6> THIS LINE MAYBE SHOULD BE THE USERS AVATAR; STRETCH GOAL */}
                    <div className="content">
                        <div className="description" style={{ color: "black" }}>
                            <p>{blerb.attributes.content}</p>
                        </div>
                    </div>
                </div>
            );
        })
    };

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderBlerbs()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { blerbs: state.blerbs };
};

export default connect(mapStateToProps, { getBlerbs })(Feed);