import React from 'react';

import Header from './Header';
import Content from './Content';

const renderBlerbs = (blerbs) => {
    return blerbs.map(blerb => {
        return (
            <div className="ui violet message" key={blerb.id}>
                <Header username={blerb.attributes.user.username} />
                <Content content={blerb.attributes.content} />
            </div>
        );
    });
};

const Blerb = (props) => {
    return (
        <div>
            {renderBlerbs(props.blerbs)}
        </div>
    );
};

export default Blerb;