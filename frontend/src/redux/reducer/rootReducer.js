import { combineReducers } from 'redux';
import { userReducer, productReducer } from './reducer';

const rootReducer = combineReducers({
    users : userReducer,
    products : productReducer
})

export default rootReducer;