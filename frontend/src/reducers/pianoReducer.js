export default function pianoReducer(state = { songs: []
}, action) {
  
    switch(action.type) {
      
      case 'ADD_SONG':
        return {
          ...state, songs: action.songs
        }       
      default:
        return state;
    }
  };
  
  