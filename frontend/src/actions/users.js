export const addUser = user => {
    return {
        type: 'ADD_USER',
        user
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