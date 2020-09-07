import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Content from './Content';

const renderBlerbs = (blerbs) => {
    const sortedBlerbs = blerbs.sort((a, b) => b.id - a.id)
    return sortedBlerbs.map(blerb => {
        return (
            <div className="ui violet message" key={blerb.id}>
                <Header username={blerb.attributes.user.username} />
                <Content content={blerb.attributes.content} />
            </div>
        );
    });
};

const Blerb = ({ blerbs }) => {
    return (
        <div>
            {renderBlerbs(blerbs)}
        </div>
    );
};

const mapStateToProps = ({ blerbs }) => {
    return {
        blerbs
    }
}

export default connect(mapStateToProps)(Blerb);