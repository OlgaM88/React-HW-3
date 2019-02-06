import { actionTypes } from '../actions';

const initialState = {
  items: [],
  error: null,
  loading: false,
};

export default function productsReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return { ...state, error: null, loading: true };

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: payload.products,
        error: null,
      };

    case actionTypes.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
        items: [],
      };

    default:
      return state;
  }
}
