function sheetReducer(state = { sheets: [], requesting: false }, action) {
    switch (action.type) {
        case 'START_GETTING_SHEETS':
            return {
                ...state, 
            sheets: [...state.sheets],
        requesting: true}
      case 'GOT_SHEETS':
        return { ...state, sheets: action.sheets, requesting: false}
      
      default:
        return state;
    }
  }; 

export default sheetReducer
