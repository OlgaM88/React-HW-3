import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuView from './MenuView';
import * as actiontypes from '../../redux/actions';
import { fetchProducts } from '../../redux/operations';

// import { getItems } from '../../modules/notes/notesSelectors';
// import { deleteNote } from '../../modules/notes/notesActions';
class MenuContainer extends Component {
  componentDidMount() {
    fetchProducts();
  }

  render() {
    return <MenuView {...this.props} />;
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
});

const mapDispatchToProps = {
  addToCart: actiontypes.addToCart,
  fetchProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
