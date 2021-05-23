import React, { Component } from 'react';
import { connect } from 'react-redux';

class SheetComponent extends Component{

    handleXY = event => {
        console.log(`(${event.clientX}, ${event.clientY})`)
    }
    render() {
        return(
            <img src={process.env.PUBLIC_URL + "/staff.jpg"} onClick={event => this.handleXY(event)} className="sheets"></img>
        )}
}