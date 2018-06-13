import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import resultReducer from './resultReducer';

let rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

export default rootReducer;

