import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';



 class SheetsList extends Component {

   handleButton = (event, sheet) => {
       event.preventDefault();
       this.props.history.push({
        pathname: '/sheet',
        state: { detail: `
            X: 1
            T: ${sheet.title}
            C: ${sheet.creator}
            M: 4/4
            L: 1/8
            Q: 1/4=60
            %%staves ${{}}
            V: V1 clef=treble
            V: V2 clef=treble
            ...
            V: Vn clef=treble (n is however many measures are needed based on how long the song is)
            
        ` }
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
const mapStateToProps = (state) => {
    return {
        data: this.props.props.sheets.filter()
    }
}


export default withRouter(connect(mapStateToProps)(SheetsList))