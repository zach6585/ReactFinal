function sheetReducer(state = { sheets: [], requesting: false }, action) {
    switch (action.type) {
  
      case 'GET_SHEETS':
        return { ...state, sheets: action.sheets, requesting: false}
      case 'START_GETTING_SHEETS':
        return {
            ...state, 
        sheets: [...state.sheets],
    requesting: true}
      default:
        return state;
    }
  }; 

export default sheetReducer