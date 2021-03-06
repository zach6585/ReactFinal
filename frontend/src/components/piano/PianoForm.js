import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PianoForm extends Component {

    state = {
        title: '',
        creator: ''
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.history.push({
            pathname: '/music',
            state: { detail: this.state }
          })

    }
    handleTitleChange = event => {
        this.setState({title: event.target.value})
    }

    handleCreatorChange = event => {
        this.setState({creator: event.target.value})
    }

    render(){
    return (
    <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title of Song</label>
            <input type="text" name="title" onChange={event => this.handleTitleChange(event)} value={this.state.title}></input>
        <label htmlFor="creator">Your Name</label>
            <input type="text" name="creator" onChange={event => this.handleCreatorChange(event)} value={this.state.creator}></input>
        <button type="submit">Submit</button>
    </form>
    )}
}
  


export default withRouter(PianoForm)