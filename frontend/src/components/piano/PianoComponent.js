import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Piano.css';

import pianoReducer from '../../reducers/pianoReducer'
import { addNoteAction } from '../../actions/piano'

class PianoComponent extends Component {
    state = {
        song: { title: '',
            note: {
                note: '',
                position: 0,
            }, spot: 0
             
    }
}
    
    handleClick = event => {
        const clss = event.target.className 
        if (clss === "white b") {
            this.setState({note: {
                position: this.state.spot,
                note: 'B'
            }})
           pianoReducer(this.state, addNoteAction)
        }
    }
    handleChange = event => {
        this.setState({song: {title: event.target.value}})
    }

    handleTitleSubmit = event => {
        event.preventDefault();
    }
    render() {
        return(
            <body>
                <style>{'body { background-color: green; }'}</style>
                <div>
                    <div>
                        <form onSubmit={this.handleTitleSubmit}>
                            <input id="title" placeholder="Insert Title" onChange={event => this.handleChange(event)} value={this.state.song.title}></input>
                        </form>
                                <h3></h3>
                    </div>
                    <div>
                        <ul className="set">
                            <li className="white b" onClick={event => this.handleClick(event)}></li>
                            <li className="black as" onClick={event => this.handleClick(event)}></li>
                            <li className="white a" onClick={event => this.handleClick(event)}></li>
                            <li className="black gs" onClick={event => this.handleClick(event)}></li>
                            <li className="white g" onClick={event => this.handleClick(event)}></li>
                            <li className="black fs" onClick={event => this.handleClick(event)}></li>
                            <li className="white f" onClick={event => this.handleClick(event)}></li>
                            <li className="white e" onClick={event => this.handleClick(event)}></li>
                            <li className="black ds" onClick={event => this.handleClick(event)}></li>
                            <li className="white d" onClick={event => this.handleClick(event)}></li>
                            <li className="black cs" onClick={event => this.handleClick(event)}></li>
                            <li className="white c" onClick={event => this.handleClick(event)}></li>
                        </ul>
                    </div>
                </div>
            </body>
        )
    }
}

export default connect()(PianoComponent)