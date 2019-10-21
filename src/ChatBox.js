import React, { Component } from 'react'
//import { Spring } from 'react-spring'
import Buttons from './Components/Buttons';
import Box from './Components/Box';
import anime from 'animejs';
class Chatbox extends Component {
  
  

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
        top: '0px',
        borderRadius: '10px 0px 0px 10px',
        width:'100px'
      },
    }
  }
  componentDidMount(){
    anime({
      targets:'.chatbox',
      translateX:[
        {value:350,duration:1200},
      ],
      
    })
  }
  render() {
    
    return (
      <div>
        
        
        <div className="ui container"></div>
        
        <div className="actions">
        <Buttons objOfButton={this.state.objOfPhoneButton} />
        <Buttons objOfButton={this.state.objOfMessageButton} />
        </div>
        <Box/>

      </div>
    )
  }
}
export default Chatbox;
