import React from 'react';

const renderBlerbs = (blerbs) => {
    return blerbs.map(blerb => {
        return (
            <div className="ui violet message" key={blerb.id}>
                <h4 className="ui violet header">{blerb.attributes.user.username}</h4>
                <div className="content">
                    <div className="description" style={{ color: "black" }}>
                        <p>{blerb.attributes.content}</p>
                    </div>
                </div>
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