import React from 'react';
import { connect } from 'react-redux';
import { getBlerbs } from '../actions';

class Feed extends React.Component {
    componentDidMount() {
        this.props.getBlerbs();
    };

    render() {
        console.log(this.props.blerbs);
        return (
            <div className="ui very padded blue inverted raised segment" style={{ boxShadow: "5px 5px 10px #888888", marginBottom: "100px", marginLeft: "200px" }}>
                Feed
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { blerbs: state.blerbs };
};

export default connect(mapStateToProps, { getBlerbs })(Feed);