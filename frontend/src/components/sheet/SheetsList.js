import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


 class SheetsList extends Component {

   handleButton = (event, sheet) => {
       event.preventDefault();
       console.log(sheet)
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
        this.props.history.push({
        pathname: '/sheet',
        state: {detail: 
        `
        X: 1
        T: ${sheet.title}
        C: ${sheet.creator}
        M: 4/4
        L: 1/4
        Q:1/4=60
        %%staves {V1}
        V: V1 clef=treble
        [V: V1] ${j}
        `
        
      }
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
        sheet: state.sheet
    }
}


export default withRouter((SheetsList))