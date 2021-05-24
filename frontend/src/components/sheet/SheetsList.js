import React, { Component } from 'react'
import { Notation } from 'react-abc'
import { fetchSheets } from '../../actions/sheet'



 class SheetComponent extends Component {
    state = {
        sheet: {
            id: -1,
            title: '',
            creator: '',
            music: []
        }
    }
   render(){
     const sheets = fetchSheets();

     handleClick = (event, sheet) => {
        this.setState({id: sheet.id, title: sheet.title, creator: sheet.creator, music: sheet.music})
        
     }
     for (const i of sheets){
        <button onClick={(event, i) => handleClick(event, i)} value={`${this.state.title} by ${this.state.creator}`}>Click Me</button>
     }
  return (
    <div>hi</div>
  )
    }
}

export default SheetComponent