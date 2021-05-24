import React, { Component } from 'react'
import { Notation } from 'react-abc'
import { fetchSheets } from '../../actions/sheet'



 class SheetComponent extends Component {
   render(){
     const sheet = fetchSheets();
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