export function addSong(song) {
    console.log(song)
    return (dispatch) => {
        dispatch({type: 'ADD_SONG'});
        fetch("http://localhost:3000/songs", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify(song)
        })
    }
}

