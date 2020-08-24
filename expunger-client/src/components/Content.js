import React from 'react';

const Content = (props) => {
    return (
        <div className="content">
            <div className="description" style={{ color: "black" }}>
                <p>{props.content}</p>
            </div>
        </div>
    );
};

export default Content;