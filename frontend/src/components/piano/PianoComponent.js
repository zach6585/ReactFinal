import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import { addSong } from '../../actions/piano'
import SoundfontProvider from './SoundFont'
import { withRouter } from 'react-router-dom';
import "react-piano/dist/styles.css";
import '../../Piano.css';




const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

const noteRange = {
  first: MidiNumbers.fromNote("c3"),
  last: MidiNumbers.fromNote("f4")
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW
});

class PianoComponent extends Component {
    state = { title: this.props.location.state.detail.title, creator: this.props.location.state.detail.creator, currnotes: [], 
            music: []
}

    numToNote = (num) => {
        if (num === 48){
            return "C"
        }
        else if (num===49){
            return "^C"
        }
        else if (num===50){
            return "D"
        }
        else if (num===51){
            return "^D"
        }
        else if (num===52){
            return "E"
        }
        else if (num===53){
            return "F"
        }
        else if (num===54){
            return "^F"
        }
        else if (num===55){
            return "G"
        }
        else if (num===56){
            return "^G"
        }
        else if (num===57){
            return "A"
        }
        else if (num===58){
            return "^A"
        }
        else if (num===59){
            return "B"
        }
        if (num === 60){
            return "c"
        }
        else if (num===61){
            return "^c"
        }
        else if (num===62){
            return "d"
        }
        else if (num===63){
            return "^d"
        }
        else if (num===65){
            return "e"
        }
        else if (num===66){
            return "f"
        }
    }
    onPlayNoteInput = (m,p) => {
        if (!this.state.currnotes.includes(this.numToNote(m))){
            this.setState({currnotes: this.state.currnotes.concat(this.numToNote(m))}) 
        }
    
    }
    handleNextNote = (event) => {
        if (this.state.currnotes.length===0){
            
        }    
        else{   
            this.setState({music: this.state.music.concat([` (${this.state.currnotes}) `]), currnotes: []})
           
            
        }   
    }

    handleDeleteNote = (event) => {
        if (this.state.music.length !==0){
            this.setState({music: this.state.music.slice(0, -1), currnotes: []})
           
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.music.length !==0){
            
            this.props.addSong(this.state)
            this.setState({music: [], title: '', creator: ''})
            this.props.history.push('/')
        }

    }

   

    render() {
        return (
            <div>
                <h1>{this.state.music}</h1>
                <SoundfontProvider
                instrumentName="acoustic_grand_piano"
                audioContext={audioContext}
                hostname={soundfontHostname}
                render={({ isLoading, playNote, stopNote, onPlayNoteInput}) => (
                    <Piano
                    noteRange={noteRange}
                    width={1530}
                    keyWidthToHeight={0.6}
                    playNote={playNote}
                    stopNote={stopNote}
                    disabled={isLoading}
                    keyboardShortcuts={keyboardShortcuts}
                    onPlayNoteInput={this.onPlayNoteInput}
                    />
                )}
                />
                <button id="next-note" onClick={this.handleNextNote}>Next Note</button>
                <button id="delete-note" onClick={this.handleDeleteNote}>Delete Note</button>
                <h3> </h3>
                <button id="submit" onClick={this.handleSubmit}>Submit Music</button>
            </div>
        )}
}

const mapDispatchToProps = dispatch => {
    return ({addSong: (song) => dispatch(addSong(song))
    })
}

export default withRouter(connect(null, mapDispatchToProps)(PianoComponent))




 