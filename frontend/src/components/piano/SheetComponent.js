import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Sheet.css';
import ColoredLine from './ColoredLine'
class SheetComponent extends Component {
    render() {
        return(
            <body >
                <h1 id='treble'>&#119070;</h1>
                <ColoredLine color={"black"} />
                <Space color={"white"} />
                <ColoredLine color={"black"} />
                <Space color={"white"} />
                <ColoredLine color={"black"} />
                <Space color={"white"} />
                <ColoredLine color={"black"} />
                <Space color={"white"} />
                <ColoredLine color={"black"} />
            </body>
        )
    }
}

export default connect()(SheetComponent)


