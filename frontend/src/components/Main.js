import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchSheets } from '../actions/sheet'

class Main extends Component {
    handlePiano = event => {
        event.preventDefault();
        this.props.history.push("/pianoform")
    }
    handleSheets = event => {
        event.preventDefault();
        this.props.history.push("/sheets")
    }
    render(){
        return(
            <div>
                <button id="toPiano" onClick={this.handlePiano}>Make Your Own Song</button>
                <button id="toSheets" onClick={this.handleSheets}>See Other People's Songs</button>
            </div>
        )
    }
}

export default withRouter(Main)