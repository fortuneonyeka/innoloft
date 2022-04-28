import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import productReducer from  './Reducers/Products'


const reducers = combineReducers({ products: productReducer });

const store = createStore(reducers, applyMiddleware(thunk));
export default store;