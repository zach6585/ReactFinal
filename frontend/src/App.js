
import React, { Component } from 'react';
import UserInput from './components/users/UserInput'
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import './App.css';
import UserLogin from './components/users/UserLogin';
import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Users from './containers/Users';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
  
              <Route exact path="/register" component={UserInput} />
            <Route path="/login" component={UserLogin} />
            

            
          </Router>
        
      </div>
    )
  }

}

export default App

