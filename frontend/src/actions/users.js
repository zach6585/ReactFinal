export const addUser = user => {
    return (dispatch) => {
        dispatch({type: 'ADD_USER'});
        fetch("localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify(user)
        })
        
        
    }
}

export function fetchUsers() {
    return (dispatch) => {
        dispatch({type: 'FETCH_USER_REQUEST'});
        fetch("localhost:3000/users")
        .then(response => response.json())
        .then(json => {
            let obj = {}
           
            for (const i in json){
                obj.push(i)
            }
            console.log(obj)
            return obj
        })
    }
}

