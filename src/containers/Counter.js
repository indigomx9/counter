import React from 'react';
import CControl from '../components/CControl/CControl';
import COutput from '../components/COutput/COutput';

class Counter extends React.Component {
    state = {
        counter: 0
    };
    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => {return {counter: prevState.counter + 1}})
                break;
            case 'dec':
                this.setState((prevState) => {return {counter: prevState.counter - 1}})
                break;
            case 'add':
                this.setState((prevState) => {return {counter: prevState.counter + value}})
                break;
            case 'sub':
                this.setState((prevState) => {return {counter: prevState.counter - value}})
        }
    };

    render() {
        return (
            <div>
                <COutput value={this.state.counter} />
                <CControl label="Increment" clicked={() => this.counterChangedHandler('inc')} />
                <CControl label="Decrement" clicked={() => this.counterChangedHandler('dec')} />
                <CControl label="Add 5" clicked={() => this.counterChangedHandler('add', 5)} />
                <CControl label="Subtract 5" clicked={() => this.counterChangedHandler('sub', 5)} />
            </div>
        );
    }
};

export default Counter;

