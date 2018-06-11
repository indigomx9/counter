import React from 'react';
import './CControl.css';

let CControl = (props) => {
    return (
        <div className="CControl" onClick={props.clicked}>
            {props.label}
        </div>
    );
};

export default CControl;

