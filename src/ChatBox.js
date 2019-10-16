import React, { Component } from 'react'
import { Spring } from 'react-spring'
import Buttons from './Components/Buttons';
import Box from './Components/Box';
class Chatbox extends Component {

  componentDidMount() {
    /*jQuery(".actions").transition({  
    y: 0,
    duration: 1000
  });*/

  
  }


  constructor(props) {
    super(props);
    this.state = {
      objOfPhoneButton: {
        icon: 'phone',
      },
      objOfMessageButton: {
        icon: 'envelope',
        position: 'absolute',
        right: '102px',
        top: '-35px',
        borderRadius: '10px 0px 0px 10px',
        width:'100px'
      },
    }
  }
  render() {
    return (
      <div>
        <div className="ui container"></div>
        <Buttons objOfButton={this.state.objOfPhoneButton} />
        <Buttons objOfButton={this.state.objOfMessageButton} />
        <Box/>

      </div>
    )
  }
}
export default Chatbox;
