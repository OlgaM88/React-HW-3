import actionTypes from '../menuActionTypes';

const initialState = {
  items: [],
  error: null,
  loading: false,
};

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return { ...state, items: [], error: null, loading: true };

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: null,
        loading: false,
      };

    case actionTypes.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
