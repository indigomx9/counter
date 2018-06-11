import React from 'react';
import classes from './CControl.css';

let CControl = (props) => {
    return (
        <div className={classes.CControl} onClick={props.clicked}>
            {props.label}
        </div>
    );
};

export default CControl;

