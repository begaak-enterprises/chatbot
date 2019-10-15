import React,{Component} from 'react'
class Chatbox extends Component{
  constructor(props){
	super(props); 
  }
  render(){
    return(
      <div>
        <div className="ui container"></div>
        <div className="actions">
          <button className="ui button"><i class="phone icon"></i></button>
          <button className="ui button"><i class="envelope icon"></i></button>
        </div>
        </div>
    )
  }
}
export default Chatbox;
