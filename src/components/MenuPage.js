import React, { Component } from 'react';
import queryString from 'query-string';
import * as API from './services/api';
import MenuList from './MenuList';
import CategorySelector from './CategorySelector';
import FormAddMenuItem from './FormAddMenuItem';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class MenuPage extends Component {
  state = {
    items: [],
    categories: [],
    isBtnAddClick: false,
  };

  componentDidMount() {
    API.getAllMenuItems().then(data => this.setState({ items: [...data] }));
    API.getCategories().then(data => this.setState({ categories: [...data] }));
    const category = getCategoryFromProps(this.props);

    if (!category) {
      this.getAllMenuItems();
    }

    this.getMenuItem(category);
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory === nextCategory) return;
    this.getMenuItem(nextCategory);
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

  handleGoBack = () => {
    API.getAllMenuItems().then(data => this.setState({ items: [...data] }));
  };

  handleAddItem = () => {
    this.setState({ isBtnAddClick: true });
  };

  render() {
    const { items, categories, isBtnAddClick } = this.state;
    const { match } = this.props;

    const currentCategory = getCategoryFromProps(this.props);
    return (
      <div>
        <h2>Меню</h2>
        <button
          type="button"
          className="btn-add-item"
          onClick={this.handleAddItem}
        >
          Добавить рецепт
        </button>
        {isBtnAddClick && <FormAddMenuItem />}
        <CategorySelector
          options={categories}
          value={currentCategory}
          onChange={this.handleCategoryChange}
        />
        <MenuList products={items} match={match} />
        <p>
          {items.length < 4 && (
            <button type="button" onClick={this.handleGoBack}>
              Назад к меню
            </button>
          )}
        </p>
      </div>
    );
  }
}
