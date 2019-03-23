import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import MenuView from './MenuView';
import menuOperations from './reduxMenu/menuOperations';
import * as menuSelectors from './reduxMenu/menuSelectors';
import CategorySelector from '../CategorySelector';
import menuActions from './reduxMenu/menuActions';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuContainer extends Component {
  componentDidMount() {
    const {
      fetchAllProducts,
      fetchAllCategories,
      fetchMenuByCategories,
    } = this.props;
    fetchAllCategories();

    const currentCategory = getCategoryFromProps(this.props);
    if (currentCategory) {
      fetchMenuByCategories(currentCategory);
    }
    fetchAllProducts();
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory === nextCategory) return;
    if (prevCategory !== nextCategory) {
      const { fetchMenuByCategories } = this.props;
      fetchMenuByCategories(nextCategory);
    }
  }

  render() {
    return (
      <div>
        <CategorySelector {...this.props} />
        <MenuView {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  menu: menuSelectors.getProducts(state),
  categories: state.menu.categories,
});

const mapDispatchToProps = {
  fetchAllProducts: menuOperations.fetchAllProducts,
  fetchAllCategories: menuOperations.fetchAllCategories,
  onChangeCategory: menuActions.CategorySelector,
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MenuContainer),
);
