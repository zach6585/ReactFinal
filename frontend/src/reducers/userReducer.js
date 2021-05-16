import uuid from 'uuid';

export default function weatherReducer(state = {
    users: []
  }, action) {
      switch(action.type){
      case 'ADD_USER':
        const user={
          id: uuid(),
          username: action.username,
          password: action.password,
        }
        return{...state, users: state.users.concat(user)}
    //   case 'REMOVE_USER':
        // return {quotes: state.quotes.filter(quote => quote.id !== action.payload)}
      
      }
    }