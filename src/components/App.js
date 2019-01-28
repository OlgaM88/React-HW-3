import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import Nav from './Nav';
import ItemPage from '../pages/ItemPage';
import NotFoundPage from '../pages/NotFoundPage';
import AddItemPage from '../pages/AddItemPage';

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
