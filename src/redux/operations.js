import axios from 'axios';
import * as actions from './actions';

export const fetchProducts = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:3001/menu');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchFailure(error));
  }
};

const addProduct = ({ item }) => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .post('http://localhost:3001/menu', { item })
    .then(({ data }) => dispatch(actions.addProductSuccess(data)))
    .catch(error => dispatch(actions.fetchFailure(error)));
};
export default { fetchProducts, addProduct };
