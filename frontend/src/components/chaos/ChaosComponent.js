import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChaosComponent extends Component {
    state = {
        wind: 0,
        gravity: 9.81,
    }
    render() {
        return(
            <h3>Hi</h3>
        )
    }
}

export default connect()(ChaosComponent)