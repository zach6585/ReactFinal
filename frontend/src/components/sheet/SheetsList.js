import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';



 class SheetsList extends Component {

   handleButton = (event, sheet) => {
       event.preventDefault();
       this.props.history.push({
        pathname: '/sheet',
        state: { detail: sheet }
      })
   }    

   render(){
    const sheets = this.props.props.sheets.map(sheet => 
    <div>
        <h2 key={sheet.id}>{`${sheet.title==="" ? 'untitled' : sheet.title} by ${sheet.creator}`}</h2>
        <button onClick={(event, s) => this.handleButton(event, sheet)}>Click Me!</button>
    </div>);
  return (
    <div>
        {sheets}
    </div>
  )
    }
}


export default withRouter(SheetsList)