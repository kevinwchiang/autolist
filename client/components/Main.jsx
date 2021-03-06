import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/HomeConnected';
import Search from './containers/SearchConnected';
import Details from './containers/DetailsConnected';

const Main = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/details" component={Details} />
  </main>
);

export default Main;
