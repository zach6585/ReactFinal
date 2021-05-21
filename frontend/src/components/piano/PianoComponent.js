import React, { Component } from 'react';
import { connect } from 'react-redux';

import pianoReducer from '../../reducers/pianoReducer'
import { addNoteAction } from '../../actions/piano'
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import Soundfont from 'soundfont-player';
import '../../Piano.css';

class PianoComponent extends Component {
    state = {
        song: { title: '',
            notes: {
                note: '',
                position: 0,
            }, spot: 0
             
    }
}
    handleChange = event => {
        this.setState({song: {title: event.target.value}})
    }

    handleTitleSubmit = event => {
        event.preventDefault();
    }

    

    render() {
        const firstNote = MidiNumbers.fromNote('c3');
        const lastNote = MidiNumbers.fromNote('f5');
        const keyboardShortcuts = KeyboardShortcuts.create({
            firstNote: firstNote,
            lastNote: lastNote,
            keyboardConfig: KeyboardShortcuts.HOME_ROW,
        });
 
        return (
        <Piano
            noteRange={{ first: firstNote, last: lastNote }}
            playNote={(midiNumber) => {
               
        }}

        stopNote={(midiNumber) => {
        // Stop playing a given note - see notes below
        }}
        width={1530}
        keyboardShortcuts={keyboardShortcuts}
        />
    );
    }
}
       

export default connect()(PianoComponent)




 