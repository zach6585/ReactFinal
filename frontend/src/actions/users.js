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
        fetch("localhost:3000/login")
        .then(response => response.json())
        .then(users => users)
    }
}

