export function fetchSheets() {
    return (dispatch) => {
        dispatch({type: "START_GETTING_SHEETS"});
        fetch('http://localhost:3000/songs')
        .then(response => response.json())
        .then(sheets => dispatch({type: 'GET_SHEETS', sheets}))
    };
}


    
  