import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Home from './pages/home';
import PageNotFound from './pages/page_not_found';
import Cards from './components/cards';

export default (
  <Route path='/' component={App} history={browserHistory} >
    <IndexRoute component={Home} />
    <Route path='cards' component={Cards} />
    <Route path='*' component={PageNotFound} />
  </Route>
);
