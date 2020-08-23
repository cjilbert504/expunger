import React from 'react';
import { connect } from 'react-redux';
import { getBlerbs } from '../actions';

import Blerb from './Blerb';

class Feed extends React.Component {
    componentDidMount() {
        this.props.getBlerbs();
    };

    render() {
        return (
            <div className="ui relaxed divided list">
                <Blerb blerbs={this.props.blerbs} />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { blerbs: state.blerbs };
};

export default connect(mapStateToProps, { getBlerbs })(Feed);