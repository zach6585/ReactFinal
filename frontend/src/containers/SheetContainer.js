import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchSheets } from '../actions/sheet'
import SheetsList from '../components/sheet/SheetsList'



 class SheetsContainer extends Component {

    componentDidMount = () => {
        this.props.fetchSheets()
    }
    

   render(){
    return (
    <div className="Sheets">
        <SheetsList props={this.props}/>
    </div>
  )
    }
}
const mapStateToProps = (state) => {
    return {
        sheets: state.sheetReducer.sheets,
        loading: state.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSheets: () => dispatch(fetchSheets())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SheetsContainer)