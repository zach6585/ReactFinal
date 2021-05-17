export default function pianoReducer(state = {song: { title: '',
notes: [{
    position: 0, 
    note: ''
}], spot: 0
}
}, action) {
  
    switch(action.type) {
  
      case 'ADD_NOTE':
        console.log('hi')
        return {
          ...state, song: {...state.song, notes: {...state.song.notes, 
          position: state.song.spot + 1, note: state.song.note}, spot: state.spot + 1 } 
        }
      default:
        return state;
    }
  };
  
  