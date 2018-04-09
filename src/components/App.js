// This component handles the App template used on every page.
import React, {Component} from 'react';
import {connect} from 'react-redux';
import DailySchedular from './DailySchedular';


class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="container-fluid">
        <DailySchedular schedules={this.props.schedules}/>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return {
    schedules: state
  };
}

export default connect(mapStateToProps)(App);
