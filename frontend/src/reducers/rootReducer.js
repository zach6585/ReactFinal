import { combineReducers } from 'redux';
import pianoReducer from './pianoReducer'
import userReducer from './userReducer'

export default combineReducers({
    pianoReducer, 
    userReducer
})