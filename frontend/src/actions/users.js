export const addUser = user => {
    return {
        type: 'ADD_USER',
        user
    }
}

export const removeUser = userId => {
    return {
        type: 'REMOVE_USER',
        userId
    }
}