import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';

export class Box extends Component {
  render() {
    return (
        
        <Spring
        from={{ opacity:0, right:-250}}
        to={{opacity:1, right:25}}
        config={{delay:1000,duration:1000}}
        >
              {props=>
                  <div style={props} className="chatbox ">
                      <div className="ui header center aligned header">ChatBox</div>
                  </div>    
              }
          
          </Spring>
      
      
    )
  }
}

export default Box;
