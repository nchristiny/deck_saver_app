import React from 'react';
import { Route, browserHistory } from 'react-router';
import App from './components/app';

export default (
  <Route path='/' component={App} history={browserHistory} />
);
