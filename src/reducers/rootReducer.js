let initialState = {
    counter: 0
};

const rootReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD') {
        return {
            counter: state.counter + 10
        }
    }
    if (action.type === 'SUBTRACT') {
        return {
            counter: state.counter - 8
        }
    }
    return state;
};

export default rootReducer;

