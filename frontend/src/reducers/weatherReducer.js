export default function weatherReducer(state = {
    wind: 0, 
    gravity: 9.81,
  }, action) {
  
    switch(action.type) {
  
      case 'ADD_WIND':
        return {...state, wind: state.wind + 1}
      case 'REMOVE_WIND':
        return {...state, wind: state.wind - 1}

        case 'ADD_GRAVITY':
          return {...state, gravity: state.wind + 0.5}
        case 'REMOVE_WIND':
          return {...state, gravity: state.gravity - 0.5}
  
      default:
        return state;
    }
  };
  
  