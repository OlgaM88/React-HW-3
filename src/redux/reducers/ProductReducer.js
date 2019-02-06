import { actionTypes } from '../actions';

const initialState = {
  items: null,
  loading: false,
  error: null,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products,
      };

    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
}
