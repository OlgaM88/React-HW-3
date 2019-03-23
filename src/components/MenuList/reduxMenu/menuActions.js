import { normalize } from 'normalizr';
import ProductsSchema from './schemas';
import types from './menuActionTypes';

const fetchRequest = request => ({
  type: types.FETCH_PRODUCTS_REQUEST,
});

const fetchSuccess = (products, categories) => {
  const normalizedProducts = normalize(products, [ProductsSchema]);

  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: {
      ids: {
        products: Object.keys(normalizedProducts.entities.products),
      },
      entities: normalizedProducts.entities,
    },
  };
};

const fetchFailure = error => ({
  type: types.FETCH_PRODUCTS_ERROR,
  payload: error,
});

const fetchCategoriesSuccess = categories => ({
  type: 'types.FETCH_CATEGORIES',
  payload: categories,
});

const categorySelect = category => ({
  type: 'SELECT_CATEGORY',
  payload: category,
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
  fetchSuccess,
  fetchFailure,
  fetchProductFailure,
  fetchProductSuccess,
  addToCart,
  addProductSuccess,
  fetchCategoriesSuccess,
  categorySelect,
};
