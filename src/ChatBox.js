import React,{Component} from 'react'
class Chatbox extends Component{
  constructor(props){
	super(props); 
  }
  render(){
    return(
      <div>
        <div className="ui container"></div>
        <div className="actions fixed">
          <button className="ui button btn"><i class="phone icon"></i></button>
          <button className="ui button btn"><i class="envelope icon"></i></button>
        </div>
        </div>
    )
  }
}
export default Chatbox;
