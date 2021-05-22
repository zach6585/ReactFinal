import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from "react-dom";
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
function BasicPiano() {
return (
    <SoundfontProvider
    instrumentName="acoustic_grand_piano"
    audioContext={audioContext}
    hostname={soundfontHostname}
    render={({ isLoading, playNote, stopNote }) => (
        <Piano
        noteRange={noteRange}
        width={1530}
        keyWidthToHeight={0.6}
        playNote={playNote}
        stopNote={stopNote}
        disabled={isLoading}
        keyboardShortcuts={keyboardShortcuts}
        />
    )}
    />
);
}
class PianoComponent extends Component {
    state = {
        song: { title: '',
            notes: {
                note: '',
                position: 0,
            }, spot: 0
             
    }
}

    render() {
        return (
            <div>
                <BasicPiano />
            </div>
        )}
}
       

export default connect()(PianoComponent)




 