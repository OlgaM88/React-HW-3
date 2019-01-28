import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import * as API from '../services/api';
import MenuList from '../components/MenuList';
import CategorySelector from '../components/CategorySelector';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class MenuPage extends Component {
  state = {
    items: [],
    categories: [],
  };

  componentDidMount() {
    API.getCategories().then(data => this.setState({ categories: [...data] }));
    const category = getCategoryFromProps(this.props);

    if (!category || category === 'all') {
      return this.getAllMenuItems();
    }

    return this.getMenuItem(category);
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);
    if (prevCategory === nextCategory) return;
    this.getMenuItem(nextCategory);
    window.onpopstate = e => {
      if (!nextCategory || nextCategory === 'all') {
        return this.getAllMenuItems();
      }
      return this.getMenuItem(nextCategory);
    };
  }

  getMenuItem = category => {
    API.getMenuItemsWithCategory(category).then(data =>
      this.setState({ items: [...data] }),
    );
  };

  getAllMenuItems = () => {
    API.getAllMenuItems().then(data => this.setState({ items: [...data] }));
  };

  handleCategoryChange = category => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: `category=${category}`,
    });
  };

  render() {
    const { items, categories } = this.state;
    const { match } = this.props;

    const currentCategory = getCategoryFromProps(this.props);
    return (
      <div>
        <h2>Меню</h2>
        <Link to="/menu/add-item" className="link">
          Добавить рецепт
        </Link>
        <CategorySelector
          options={categories}
          value={currentCategory}
          onChange={this.handleCategoryChange}
        />
        <MenuList products={items} match={match} />
      </div>
    );
  }
}
