import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import SoundfontProvider from './SoundFont'
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
    state = { title: '', currnotes: [],
            music: []
}
    onPlayNoteInput = (m,p) => {
        
        if (!this.state.currnotes.includes(m)){
            this.setState({currnotes: this.state.currnotes.concat(m)})
        }
    
    }
    handleNextNote = (event) => {
        if (this.state.currnotes.length===0){
            this.setState({music: this.state.music.concat([-1])})
            
        }    
        else{   
            this.setState({music: this.state.music.concat([this.state.currnotes]), currnotes: []})
            
        }
        console.log(this.state.music)
        
        
    }

    handleDeleteNote = (event) => {
        if (this.state.music.length !==0){
            this.setState({music: this.state.music.slice(0, -1), currnotes: []})
        }
        console.log(this.state.music)
    }

    render() {
        return (
            <div >
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
                <h3></h3>
                <button id="submit" onClick={this.handleSubmit}>Submit Music</button>
            </div>
        )}
}
       

export default connect()(PianoComponent)




 