import React, { Component } from 'react'
import { Notation } from 'react-abc'



 class SheetComponent extends Component {
   render(){
  return (
    <Notation
      notation = {{
        X: 1, 
        T: 3
      }}
    />
  )
    }
}

export default SheetComponent