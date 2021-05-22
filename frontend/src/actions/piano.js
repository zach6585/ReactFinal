export const addSong = song => {
    return (dispatch) => {
        dispatch({type: 'ADD_SONG'});
        fetch("localhost:3000/songs", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify(song)
        })
    }
}

