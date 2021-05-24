import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


 class SheetsList extends Component {

   state = {
       sheet: ""
   }
   handleButton = (event, sheet) => {
       event.preventDefault();
       this.setState({sheet: sheet})
       let j = ""
       for (let i of sheet.music.split(")")){
           i = i.replaceAll("(", "")
           i = i.replaceAll('"', "")
           i = i.replaceAll('[',"")
           i = i.replaceAll(']',"")
           i = i.replaceAll(" ","")
           i = i.replaceAll(",", " ")
           
           i = `[${i}] | `
           j = j + i
       } 
       this.setState({sheet: j})
       this.props.history.push({
        pathname: '/sheet',
        state: {sheet: this.state.sheet}
      })
   }    

   render(){
    const sheets = this.props.props.sheets.map(sheet => 
    <div key={sheet.id}>
        <h2>{`${sheet.title==="" ? 'untitled' : sheet.title} by ${sheet.creator}`}</h2>
        <button onClick={(event, s) => this.handleButton(event, sheet)}>Click Me!</button>
    </div>);
  return (
    <div>
        {sheets}
    </div>
  )
    }
}
const mapStateToProps = (state) => {
    return {
        sheet: this.state.sheet
    }
}


export default withRouter(connect(mapStateToProps)(SheetsList))