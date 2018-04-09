import React,{Component} from 'react'


export default class Time extends Component {

    constructor(props){
        super(props)
        console.log("props", props)
    }
    render(){
        return (
          <div className="row"  style={{'paddingLeft': '10px'}}>
            <span style={{'marginTop': '-15px', 
          'marginBottom': '15px'}}>
              {this.props.time}
            </span>
          </div>
        )
    }
     
}