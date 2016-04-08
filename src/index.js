import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router';
import routes from './routers';
import reducers from './reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const app = {
    run: function(){
        var store = createStoreWithMiddleware(reducers);
        ReactDOM.render(
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
            </Provider>,
            document.getElementById('app')
        );
    }
};

window.app = app;