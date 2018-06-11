import React from 'react';
import classes from './COutput.css';

let COutput = (props) => {
    return (
        <div className={classes.COutput}>
            Counter: {props.value}
        </div>
    );
};

export default COutput;

