import React,{Component} from 'react'


export default class Item extends Component {

    constructor(props){
        super(props)
        console.log("props", props)
    }
    render(){
        return (
          <div className="row" style={{'border': '1px solid black'}}>
          
            {this.props.schedule.description}
          
          </div>
        )
    }
     
}