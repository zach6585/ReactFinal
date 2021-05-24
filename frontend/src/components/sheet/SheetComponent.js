import React, { Component } from 'react'
import { Notation } from 'react-abc'
import SheetsList from './SheetsList'


 class SheetComponent extends Component {
   
   render(){

    console.log(this.props.location.state.detail)
   

    
    
  return (
    <Notation
      notation = {this.props.location.state.detail}
    />
  )
    }
}

export default SheetComponent