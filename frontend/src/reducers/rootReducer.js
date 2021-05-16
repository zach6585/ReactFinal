import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer'
import userReducer from './userReducer'

export default combineReducers({
    weatherReducer, 
    userReducer
})