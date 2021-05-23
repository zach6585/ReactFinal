
import React, { Component } from 'react';

import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import './App.css';

import PianoComponent from './components/piano/PianoComponent'





class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
        <div>
          <Switch>
            
            <Route exact path="/music" component={PianoComponent} />
          </Switch>
        </div>
      </Router>
             
            

            
        
        
      </div>
    )
  }

}

export default App

