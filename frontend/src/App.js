
import React, { Component } from 'react';
import UserInput from './components/users/UserInput'
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import './App.css';
import UserLogin from './components/users/UserLogin';
import ChaosComponent from './components/chaos/ChaosComponent'



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
          <Switch>
            <Route exact path="/" component={UserInput} />
            <Route exact path='/login' component={UserLogin} />
            <Route exact path="/home" component={ChaosComponent} />
          </Switch>
        </div>
      </Router>
             
            

            
        
        
      </div>
    )
  }

}

export default App

