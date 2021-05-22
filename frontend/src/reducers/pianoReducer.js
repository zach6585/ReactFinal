export default function pianoReducer(state = { title: '', currnotes: [],
music: []
}, action) {
  
    switch(action.type) {
      
      case 'ADD_NOTES':
        return {
          ...state, music: state.music.concat(state.currnotes), currnotes: []
        }       
      default:
        return state;
    }
  };
  
  