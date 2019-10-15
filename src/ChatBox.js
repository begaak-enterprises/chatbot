import React, { Component } from 'react'
import Buttons from './Components/Buttons';
class Chatbox extends Component {

  componentDidMount() {
      jQuery(".actions").transition({  
      y: 0,
      duration: 1000
    });
  }

  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div>
        <div className="ui container"></div>
          <Buttons/>
          <div className="chatbox fixed"></div>
      </div>
    )
  }
}
export default Chatbox;
