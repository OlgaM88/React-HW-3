import axios from 'axios';
import actions from './menuActions';

const fetchAllProducts = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:3001/menu');
    console.log(response.data);
    dispatch(actions.fetchProducts(response.data));
  } catch (error) {
    dispatch(actions.fetchFailure(error));
  }
};

export default { fetchAllProducts };
