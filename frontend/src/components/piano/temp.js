handleClick = event => {
    const clss = event.target.className 
    if (clss === "white b") {
        this.setState({note: {
            position: this.state.spot,
            note: 'B'
        }})
        console.log("B")
       pianoReducer(this.state, addNoteAction)

    }
    else if (clss === "black as") {
        this.setState({note: {
            position: this.state.spot,
            note: 'A#'
        }})
        console.log("A#")
       pianoReducer(this.state, addNoteAction)

    }
    else if (clss === "white a") {
        this.setState({note: {
            position: this.state.spot,
            note: 'A'
        }})
        console.log("A")
       pianoReducer(this.state, addNoteAction)

    }
    else if (clss === "black gs") {
        this.setState({note: {
            position: this.state.spot,
            note: 'G#'
        }})
        console.log("G#")
       pianoReducer(this.state, addNoteAction)

    }
    else if (clss === "white g") {
        this.setState({note: {
            position: this.state.spot,
            note: 'G'
        }})
        console.log("G")
       pianoReducer(this.state, addNoteAction)

    }

    else if (clss === "black fs") {
        this.setState({note: {
            position: this.state.spot,
            note: 'F#'
        }})
        console.log("F#")
       pianoReducer(this.state, addNoteAction)

    }
    else if (clss === "white f") {
        this.setState({note: {
            position: this.state.spot,
            note: 'F'
        }})
        console.log("F")
       pianoReducer(this.state, addNoteAction)

    }
    else if (clss === "white e") {
        this.setState({note: {
            position: this.state.spot,
            note: 'E'
        }})
        console.log("E")
       pianoReducer(this.state, addNoteAction)

    }
    else if (clss === "black ds") {
        this.setState({note: {
            position: this.state.spot,
            note: 'D#'
        }})
        console.log("D#")
       pianoReducer(this.state, addNoteAction)

    }
    else if (clss === "white d") {
        this.setState({...this.state, song: {...this.state.song, notes: {
            position: this.state.spot,
            note: 'D'
        }}})
        console.log("D")
       pianoReducer(this.state, addNoteAction)

    }
    else if (clss === "black cs") {
        this.setState({note: {
            position: this.state.spot,
            note: 'C#'
        }})
        console.log("C#")
       pianoReducer(this.state, addNoteAction)

    }
    else if (clss === "white c") {
        this.setState({note: {
            position: this.state.spot,
            note: 'C'
        }})
        console.log("C")
       pianoReducer(this.state, addNoteAction)

    }
}


