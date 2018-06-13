import { INCREMENT, DECREMENT, ADD, SUBTRACT } from '../actions/actions';

let initialState = {
    counter: 0
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:  // Long way with Object.asign
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case DECREMENT:
            return {
                ...state,  // Short way spread operator
                counter: state.counter - 1
            }
        case ADD:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload
            }
    }    
    return state;
};

export default counter;

