
import React, { Component } from 'react';

import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import './App.css';
import PianoComponent from './components/piano/PianoComponent';
import Main from './components/Main'
import PianoForm from './components/piano/PianoForm'
import SheetComponent from './components/sheet/SheetComponent';





class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/pianoform" component={PianoForm} />
            <Route exact path="/music" component={PianoComponent} />
            <Route exact path="/sheets" component={SheetComponent} />
          </Switch>
        </div>
      </Router>
             
            

            
        
        
      </div>
    )
  }

}

export default App

