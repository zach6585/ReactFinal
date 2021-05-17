export default function pianoReducer(state = {song: { title: '',
notes: [{
    position: 0, 
    note: ''
}], spot: 0, audio: ''
}
}, action) {
  
    switch(action.type) {
      
      case 'ADD_NOTE':
        const audis = new Audio 
        audis.play(`/Users/zach6585/reactfinal/frontend/src/mp3s/${audio}`)
        return {
          ...state, song: {...state.song, notes: {...state.song.notes, 
          position: state.song.spot + 1, note: state.song.note}, spot: state.spot + 1 } 
        }
      default:
        return state;
    }
  };
  
  