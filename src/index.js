import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger);

const createEnhancedStore = compose(
      createStoreWithMiddleware
    )(createStore);

window.onload = () => {
  ReactDOM.render(
    <Provider store={createEnhancedStore(reducers)}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
   , document.querySelector('#container')
  );
};
