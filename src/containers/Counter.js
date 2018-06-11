import React from 'react';
import { connect } from 'react-redux';
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
                <COutput value={this.props.ctr} />
                <CControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CControl label="Decrement" clicked={() => this.counterChangedHandler('dec')} />
                <CControl label="Add 5" clicked={() => this.counterChangedHandler('add', 5)} />
                <CControl label="Subtract 5" clicked={() => this.counterChangedHandler('sub', 5)} />
            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        ctr: state.counter
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: () => dispatch({ type: 'ADD' }),
        onSubtractCounter: () => dispatch({ type: 'SUBTRACT' })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

