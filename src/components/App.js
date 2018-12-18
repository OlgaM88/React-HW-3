import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import MenuPage from './MenuPage';
import Nav from './Nav';
import ItemPage from './ItemPage';

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/menu" component={MenuPage} />
      <Route path="/menu/:id" component={ItemPage} />
    </Switch>
  </>
);

export default App;
