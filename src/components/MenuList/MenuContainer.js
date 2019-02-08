import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuView from './MenuView';
import { menuOperations } from './reduxMenu';

class MenuContainer extends Component {
  componentDidMount() {
    const { fetchAllProducts } = this.props;
    fetchAllProducts();
  }

  render() {
    const { products } = this.props;
    return <MenuView {...products} />;
  }
}
const mapStateToProps = state => ({
  products: state.products.items,
});

const mapDispatchToProps = {
  fetchAllProducts: menuOperations.fetchAllProducts,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
