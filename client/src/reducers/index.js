import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorreducer';
import authReducer from './authreducer';
//below if were more reducers give reducers a name and export them in combineReducers method
export default combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer    
});