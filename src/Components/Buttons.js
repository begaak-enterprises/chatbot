import React,{Component} from 'react'
class Buttons extends Component{
  constructor(props){
	super(props); 
  }
  render(){
    return(
        <div className="actions fixed">
        <button className="ui button animations btn"><i class="phone icon"></i></button>
        <button className="ui button animations btn"><i class="envelope icon"></i></button>
      </div>
    )
  }
}
export default Buttons;
