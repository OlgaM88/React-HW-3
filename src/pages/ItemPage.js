import React, { Component } from 'react';
import * as API from '../services/api';
import SelectedItem from '../components/SelectedItem';

export default class ItemPage extends Component {
  state = {
    name: null,
    image: null,
    price: null,
    description: null,
    category: null,
    ingredients: [],
  };

  componentDidMount() {
    const { match } = this.props;
    API.getMenuItemById(match.params.id).then(item =>
      this.setState({ ...item }),
    );
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    const { category } = this.state;
    if (location.state) {
      return history.push(location.state.from);
    }
    return history.push({
      pathname: '/menu',
      search: `?category=${category}`,
    });
  };

  render() {
    const {
      name,
      image,
      description,
      category,
      price,
      ingredients,
    } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Вернуться к меню
        </button>
        <SelectedItem
          name={name}
          image={image}
          price={price}
          description={description}
          category={category}
          ingredients={ingredients}
        />
      </div>
    );
  }
}
