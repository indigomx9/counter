import React from 'react';
import { connect } from 'react-redux';
import CControl from '../components/CControl/CControl';
import COutput from '../components/COutput/COutput';
import { 
    INCREMENT, DECREMENT, ADD, SUBTRACT, 
    STORE_RESULT, DELETE_RESULT
 } from '../actions/actions';


class Counter extends React.Component {
    render() {
        return (
            <div>
                <COutput value={this.props.ctr} />
                <CControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CControl label="Add 10" clicked={this.props.onAddCounter} />
                <CControl label="Subtract 15" clicked={this.props.onSubtractCounter} />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li 
                            key={strResult.id} 
                            onClick={() =>  this.props.onDeleteResult(strResult.id)}
                            >{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: INCREMENT }),
        onDecrementCounter: () => dispatch({ type: DECREMENT }),
        onAddCounter: () => dispatch({ type: ADD, payload: 10 }),
        onSubtractCounter: () => dispatch({ type: SUBTRACT, payload: 15 }),        
        onStoreResult: () => dispatch({ type: STORE_RESULT}),
        onDeleteResult: (id) => dispatch({ type: DELETE_RESULT, resultElId: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

