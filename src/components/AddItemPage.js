import React, { Component } from 'react';
import * as API from './services/api';
import FormToAddItem from './FormToAddItem';

export default class AddItemPage extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    API.getCategories().then(data => this.setState({ categories: [...data] }));
  }

  render() {
    const { categories, ingridients } = this.state;
    return <FormToAddItem categories={categories} ingridients={ingridients} />;
  }
}
