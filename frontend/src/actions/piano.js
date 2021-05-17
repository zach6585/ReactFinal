export const addNoteAction = {
    type: 'ADD_NOTE'
}


export const addSong = song => {
    return (dispatch) => {
        dispatch({type: 'ADD_SONG'});
        fetch("localhost:3000/sheets", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify(song)
        })
    }
}

