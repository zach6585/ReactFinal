export const addUser = user => {
    return (dispatch) => {
        dispatch({type: 'ADD_USER'});
        fetch("localhost:3000/", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify(user)
        })
        const data = await response.json()
        
    }
}

export function fetchUsers() {
    return (dispatch) => {
        dispatch({type: 'FETCH_USER_REQUEST'});
        fetch("WILL INSERT PAGE WITH USERS HERE")
        .then(response => response.json())
        .then(users => console.log(users))
    }
}

export function checkUser() {
    return (dispatch) => {
        dispatch({type: 'CHECK_USER'});
        fetch("")
    }
}