import React, { Component } from 'react';

import * as API from './services/api';
import MenuList from './MenuList';

export default class MenuPage extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    API.getAllMenuItems().then(items => {
      this.setState({ items });
    });
  }

  render() {
    const { items } = this.state;
    const { match } = this.props;

    return (
      <div>
        <h2>Меню</h2>
        <MenuList items={items} match={match} />
      </div>
    );
  }
}
