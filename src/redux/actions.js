import axios from 'axios';

export const actionTypes = {
  FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCESS: 'FETCH_PRODUCTS_SUCESS',
  FETCH_PRODUCTS_ERROR: 'FETCH_PRODUCTS_ERROR',
  FETCH_PRODUCT_REQUEST: 'FETCH_PRODUCT_REQUEST',
  FETCH_PRODUCT_SUCESS: 'FETCH_PRODUCT_SUCESS',
  FETCH_PRODUCT_ERROR: 'FETCH_PRODUCT_ERROR',
  ADD_TO_CART: 'ADD_TO_CART',
  ADD_SUCCESS: 'ADD_SUCCESS',
};

axios.defaults.baseURL = 'http://localhost:3001';

export const fetchRequest = request => ({
  type: actionTypes.FETCH_PRODUCTS_REQUEST,
});

export const fetchSuccess = products => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchFailure = error => ({
  type: actionTypes.FETCH_PRODUCTS_ERROR,
  payload: { error },
});

export const fetchProduct = () => ({
  type: actionTypes.FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = item => ({
  type: actionTypes.FETCH_PRODUCT_SUCCESS,
  payload: item,
});

export const fetchProductFailure = error => ({
  type: actionTypes.FETCH_PRODUCT_ERROR,
  payload: { error },
});

export const addToCart = id => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id,
  },
});

export const addProductSuccess = item => ({
  type: actionTypes.ADD_SUCCESS,
  payload: item,
});
