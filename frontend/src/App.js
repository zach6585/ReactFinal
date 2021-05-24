
import React, { Component } from 'react';

import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import './App.css';
import PianoComponent from './components/piano/PianoComponent';

import PianoForm from './components/piano/PianoForm'





class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
        <div>
          <Switch>
            {/* <Route exact path="/" component={*To come soon (will be main page)*} */}
            <Route exact path="/pianoform" component={PianoForm} />
            <Route exact path="/music" component={PianoComponent} />
          </Switch>
        </div>
      </Router>
             
            

            
        
        
      </div>
    )
  }

}

export default App

