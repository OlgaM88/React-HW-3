import types from './menuActionTypes';

const fetchRequest = request => ({
  type: types.FETCH_PRODUCTS_REQUEST,
});
const fetchProducts = products => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});
const fetchFailure = error => ({
  type: types.FETCH_PRODUCTS_ERROR,
  payload: error,
});
const fetchProduct = () => ({
  type: types.FETCH_PRODUCT_REQUEST,
});

const fetchProductSuccess = item => ({
  type: types.FETCH_PRODUCT_SUCCESS,
  payload: item,
});

const fetchProductFailure = error => ({
  type: types.FETCH_PRODUCT_ERROR,
  payload: { error },
});

const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: {
    id,
  },
});

const addProductSuccess = item => ({
  type: types.ADD_SUCCESS,
  payload: item,
});
export default {
  fetchRequest,
  fetchProduct,
  fetchProducts,
  fetchFailure,
  fetchProductFailure,
  fetchProductSuccess,
  addToCart,
  addProductSuccess,
};
