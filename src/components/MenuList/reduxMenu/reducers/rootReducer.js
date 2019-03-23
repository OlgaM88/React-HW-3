import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import entityReducer from './entityReducer';

export default combineReducers({
  menu: menuReducer,
  entities: entityReducer,
});
