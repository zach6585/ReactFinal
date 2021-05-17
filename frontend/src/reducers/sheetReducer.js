export default function sheetReducer(state = {song: { title: '',
position: {
    value: 0,
    sharp: false
}}}, action) {
  
    switch(action.type) {
  
      case 'ADD_NOTE':
        return {...state, song: {...state.song, position: state.song.position.value + 1, sharp: false}}
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
  
  