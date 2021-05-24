function sheetReducer(state = { sheets: [] }, action) {
    switch (action.type) {
  
      case 'GET_SHEETS':
        return { ...state, sheets: action.sheets }
  
      default:
        return state;
    }
  }; 