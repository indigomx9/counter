import React from 'react';
import Counter from '../containers/Counter.js';
import classes from './App.css';

let App = () => {
    return (
        <div>
            <h1 className={classes.banner}>Counter</h1>
            <Counter />
        </div>
    );
};

export default App;

