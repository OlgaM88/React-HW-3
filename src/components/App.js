import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import MenuPage from './MenuPage';
import Nav from './Nav';

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/menu" component={MenuPage} />
    </Switch>
  </>
);

export default App;
