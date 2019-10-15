import React, { Component } from 'react'
class Chatbox extends Component {

  componentDidMount() {
    $(".actions").transition({  
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
        <div className="actions fixed">
          <button className="ui button animations btn"><i class="phone icon"></i></button>
          <button className="ui button animations btn"><i class="envelope icon"></i></button>
        </div>
      </div>
    )
  }
}
export default Chatbox;
