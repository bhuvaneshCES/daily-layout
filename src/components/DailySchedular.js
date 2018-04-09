import React,{Component} from 'react'
import Item from './Item'
import Time from './Time'
import * as _ from 'lodash'

const Times = ['09:00 AM', '09:30', '10:00 AM', '10:30', '11:00 AM',
'11:30', '12:00 PM', '12:30 PM', '01:00', '01:30 PM', '02:00', '02:30 PM', '03:00', '03:30 PM',
'04:00', '04:30 PM', '05:00', '05:30 PM', '06:00', '06:30 PM', '07:00', '07:30 PM', '08:00', '08:30 PM', '09:00'];

export default class DailySchedular extends Component {

    constructor(props){
        super(props)
        _.forEach(props.schedules, function(value, index) {
          console.log("value", value)
          _.forEach(Times, function(time, i) {
            console.log("time", time)
          })
        })
    }
    render(){
        return (
          <div>
            <div className="jumbotron">
            </div>
            <div className="row">
            <div className="col-1"></div>
              <div className="col-2">
                  {/* <div className="row"> */}
                  {Times.map((time) => <Time key={time} time={time} />)}
                {/* </div> */}
              </div>
              <div className="col-9">
                {/* <ul className="list-group" style={{'listStyle': 'none'}}> */}
                  {this.props.schedules.map((schedule) => <Item key={schedule} schedule={schedule} />)}
                {/* </ul> */}
              </div>
            </div>
          </div>
        )
    }
     
}