import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import menuReducer from '../components/MenuList/reduxMenu/reducers/menuReducer';

const rootReducer = combineReducers({ products: menuReducer });

const middlewares = applyMiddleware(thunk);

const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
