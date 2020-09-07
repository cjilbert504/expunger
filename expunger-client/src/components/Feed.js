import React from 'react';
import { connect } from 'react-redux';

import { getBlerbs } from '../actions/blerbs/getBlerbs';
import Blerb from './Blerb';
import BlerbWriter from './BlerbWriter';

class Feed extends React.Component {
    componentDidMount() {
        this.props.getBlerbs();

        this.interval = setInterval(this.props.getBlerbs, 60000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    render() {
        return (
            <div>
                <div className="ui segment" style={{ marginLeft: "300px", marginTop: "25px", width: "850px" }}>
                    <BlerbWriter />
                </div>
                <div className="ui container" style={{ width: "700px", marginTop: "50px" }}>
                    <div className="ui relaxed divided list">
                        <Blerb />
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = ({ blerbs }) => {
    return { blerbs };
};

export default connect(mapStateToProps, { getBlerbs })(Feed);