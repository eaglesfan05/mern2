import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
//below if were more reducers give reducers a name and export them in combineReducers method
export default combineReducers({
    item: itemReducer
});