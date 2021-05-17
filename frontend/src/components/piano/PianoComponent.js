import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Piano.css';
import ColoredLine from './ColoredLine'
class PianoComponent extends Component {
    state = {
        song: { title: '',
            position: {
                value: 0,
                noteType: 'quarter',
                sharp: false
            },
             
    }
}
    
    handleClick = event => {
        const clss = event.target.className 
        if (clss === "white b") {

        }
    }
    render() {
        return(
            <body>
                <style>{'body { background-color: green; }'}</style>
                <div>
                    <div>
                        <input id="title" onChange={event => handleChange(event)}>{this.state.song.title}</input>
                        <h3></h3>
                        <h1 id='treble'>&#119070;</h1>
                        
                        <ColoredLine color={"white"} height={10} id="e"/>
                        <ColoredLine color={"black"} height={5} id="d"/>
                        <ColoredLine color={"white"} height={10} id="c"/>
                        <ColoredLine color={"black"} height={5} id="b" />
                        <ColoredLine color={"white"} height={10} id="a"/>
                        <ColoredLine color={"black"} height={5} id="g"/>
                        <ColoredLine color={"white"} height={10} id="f"/>
                        
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