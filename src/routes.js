import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Home from './pages/home';
import PageNotFound from './pages/page_not_found';
import Card from './components/card';
import Search from './components/search';

export default (
  <Route path='/' component={App} history={browserHistory} >
    <IndexRoute component={Home} />
    <Route path='card' component={Card} />
    <Route path='search' component={Search} />
    <Route path='*' component={PageNotFound} />
  </Route>
);
