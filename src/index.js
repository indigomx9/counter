import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from '../src/components/App.jsx';
import rootReducer from './reducers/rootReducer';

let store = createStore(
    rootReducer, composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

