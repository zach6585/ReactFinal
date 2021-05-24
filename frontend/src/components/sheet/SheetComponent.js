import React, { Component } from 'react'
import { Notation } from 'react-abc'
import { fetchSheets } from '../../actions/sheet'



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