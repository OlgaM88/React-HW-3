import axios from 'axios';
import actions from './menuActions';

const fetchAllProducts = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:3001/menu');
    console.log(response.data);
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(actions.fetchFailure(error));
  }
};

const fetchAllCategories = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:3001/categories');
    console.log(response.data);
    dispatch(actions.fetchCategoriesSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(actions.fetchFailure(error));
  }
};

const fetchMenuByCategories = category => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .get(`http://localhost:3000/menu?category=${category}`)
    .then(({ data }) => dispatch(actions.fetchSuccess(data)))
    .catch(error => dispatch(actions.fetchError(error)));
};
export default { fetchAllProducts, fetchMenuByCategories, fetchAllCategories };
