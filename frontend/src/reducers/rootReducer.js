import { combineReducers } from 'redux';
import pianoReducer from './pianoReducer';
import sheetReducer from './sheetReducer';

export default combineReducers({
    pianoReducer,
    sheetReducer
})