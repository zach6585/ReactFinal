export default function userReducer(state = {
    users: [], requesting: false
  }, action) {
      switch(action.type){
      case 'ADD_USER':
        const user={
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
  