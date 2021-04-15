import React from 'react';
import { ReactTitle } from 'react-meta-tags';

const Component2 = (props) => {
    return (
        <div className="wrapper">
            <ReactTitle title={props.text} />
            <div className="content"></div>
        </div>
    )
}

export default Component2;
