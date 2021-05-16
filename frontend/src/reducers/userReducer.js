import uuid from 'uuid';

export default function weatherReducer(state = {
    users: [], requesting: false
  }, action) {
      switch(action.type){
      case 'ADD_USER':
        const user={
          id: uuid(),
          username: action.username,
          password: action.password,
        }
        return{...state, users: state.users.concat(user)}
      case 'FETCH_USER_REQUEST':
          return {
            ...state,
            users: [...state.users], 
            requesting: true
          }
      default:
        return state;
      }
    }
  