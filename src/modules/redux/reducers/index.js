import {combineReducers} from 'redux';
import globalReducer from './globalReducer';
import productsReducer from './productsReducer';
import productDetailReducer from './productDetailReducer';
import authReducer from './authReducer';

const reducer = combineReducers({
    globalReducer,
    productsReducer,
    productDetailReducer,
    authReducer
});

export default reducer;