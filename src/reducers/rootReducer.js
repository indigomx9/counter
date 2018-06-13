import { 
    INCREMENT, DECREMENT, ADD, SUBTRACT, 
    STORE_RESULT, DELETE_RESULT
 } from '../actions/actions';

let initialState = {
    counter: 0,
    results: []
};

const rootReducer = (state = initialState, action) => {
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
        case STORE_RESULT:
            return {
                ...state,  // Concat returns a new array.
                results: state.results.concat({
                    id: new Date(), 
                    value: state.counter
                })
            }
        case DELETE_RESULT:
        // Filter returns a new array.
            const updatedArray = state.results.filter(
                (result => result.id !== action.resultElId));
            return {
                ...state,
                results: updatedArray
            }
    }    
    return state;
};

export default rootReducer;

