import React from 'react';
import './COutput.css';

let COutput = (props) => {
    return (
        <div className="COutput">
            Current Counter: {props.value}
        </div>
    );
};

export default COutput;

