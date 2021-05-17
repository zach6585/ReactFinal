import { combineReducers } from 'redux';
import sheetReducer from './sheetReducer'
import userReducer from './userReducer'

export default combineReducers({
    sheetReducer, 
    userReducer
})