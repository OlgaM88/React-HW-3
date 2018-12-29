import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import MenuPage from './MenuPage';
import Nav from './Nav';
import ItemPage from './ItemPage';
import NotFoundPage from './NotFoundPage';
import AddItemPage from './AddItemPage';

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/menu" component={MenuPage} />
      <Route exact path="/menu/:add-item" component={AddItemPage} />

      <Route path="/menu/:id" component={ItemPage} />

      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
