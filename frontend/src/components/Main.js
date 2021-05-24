import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Main extends Component {
    handlePiano = event => {
        event.preventDefault();
        this.props.history.push("/pianoform")
    }
    render(){
        return(
            <button id="toPiano" onClick={this.handlePiano}>Make Your Own Song</button>
        )
    }
}

export default withRouter(Main)