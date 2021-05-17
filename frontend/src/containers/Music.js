
import React, { Component } from 'react';

import PianoComponent from '../components/piano/PianoComponent';
import SheetComponent from '../components/piano/SheetComponent';

class Music extends Component {
  
  render(){
    return(
        <div>
            <SheetComponent />
            {/* <PianoComponent /> */}
             
        </div>
    )
  }

}

export default Music

