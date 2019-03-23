import { combineReducers } from 'redux';
import actionTypes from '../menuActionTypes';

function menuReducer(state = [], { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return payload.ids.products;

    default:
      return state;
  }
}

function categoriesReducer(state = [], { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_CATEGORIES:
      return payload;

    default:
      return state;
  }
}

function selectedCategory(state = null, { type, payload }) {
  switch (type) {
    case actionTypes.SELECT_CATEGORY:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  ids: menuReducer,
  categories: categoriesReducer,
  category: selectedCategory,
});
