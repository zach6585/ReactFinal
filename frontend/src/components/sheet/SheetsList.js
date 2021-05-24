import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Notation } from 'react-abc'
import { fetchSheets } from '../../actions/sheet'



 class SheetsList extends Component {

    handleClick = (event) => {
        this.props.fetchSheets()
        console.log(this.props)
    }
    

   render(){
  return (
    <button onClick={event => this.handleClick(event)}>Click Me!</button>
  )
    }
}
const mapStateToProps = (state) => {
    return {
        sheets: state.sheets,
        loading: state.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSheets: () => dispatch(fetchSheets())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SheetsList)