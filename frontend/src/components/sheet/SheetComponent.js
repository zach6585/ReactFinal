import React, { Component } from 'react'
import { Notation } from 'react-abc'
import { withRouter } from 'react-router-dom';


 class SheetComponent extends Component {
   
   handleOnClick = (event) => {
     this.props.history.push("/");
   }
   render(){

    console.log(this.props.location.state.detail)
   

    
    
  return (
    <div>
    <Notation
      notation = {this.props.location.state.detail}
    />
    <button onClick={event => this.handleOnClick(event)}>Return to Main Page</button>
    </div>
  )
    }
}

export default withRouter(SheetComponent)