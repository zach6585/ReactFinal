import React, { Component } from 'react'
import { Notation } from 'react-abc'
import SheetsList from './SheetsList'


 class SheetComponent extends Component {
   
   render(){
     <SheetsList />
    const notation = this.props.location.state.detail
    console.log(notation)
  return (
    <Notation
      notation = {notation}
    />
  )
    }
}

export default SheetComponent