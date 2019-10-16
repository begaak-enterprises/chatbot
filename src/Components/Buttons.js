import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';
import { delay } from 'q';
class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const styles = {

      position: this.props.objOfButton.position,
      right: this.props.objOfButton.right,
      top: this.props.objOfButton.top,
      borderRadius: this.props.objOfButton.borderRadius,
      width:this.props.objOfButton.width
    };
    return (
      <Spring
      from={{ opacity:0, bottom:-500}}
      to={{opacity:1, bottom:55}}
      config={{delay:1000,duration:1000}}
      >
        {props =>  <div className="actions" style={props}>
      <button className="ui button animations btn" style={styles}><i class={'' + this.props.objOfButton.icon + ' icon'}></i></button>
    </div> }
    
      </Spring>
    )
  }
}
export default Buttons;
