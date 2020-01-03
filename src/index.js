import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { Provider } from 'react-redux'

import { fetchMemes } from './actions';

import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store',store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

