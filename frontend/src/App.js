
import React, { Component } from 'react';
import UserInput from './components/users/UserInput'
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import './App.css';
import UserLogin from './components/users/UserLogin';
import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Users from './containers/Users';
import { fetchUsers } from './actions/users'

class App extends Component {
  state = {
    users: [fetchUsers()]
  }
  render(){
    return(
      <div className="App">
        <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/users' render={routerProps => <Users {...routerProps} users={this.state.users}/>} />
        </div>
      </Router>
             
            

            
        
        
      </div>
    )
  }

}

export default App

