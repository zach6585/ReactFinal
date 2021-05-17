
import React, { Component } from 'react';
import UserInput from './components/users/UserInput'
import { BrowserRouter as Router,  Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import UserLogin from './components/users/UserLogin';


class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
            <Switch>]
              <Route exact path="/register" component={UserInput} />
            <Route path="/login" component={UserLogin} />
            
              {/* <Route exact path="/" component={HomePage} />   */}
              <Redirect from="*" to="/" />
              </Switch>
          </Router>
        
      </div>
    )
  }

}

export default App

