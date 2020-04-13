import React from "react";
import User from "./User.js";
import Addpee from "./Addpee"
export default class MyComponent extends React.Component {
  state = {
    tempDate: new Date(),
    date: [],
    time: [],
    timestamp: []
  };



  useCurrentDateTime = (date, time) => {
    this.setState({
      date:
        this.state.tempDate.getDate() +
        "/" +
        (this.state.tempDate.getMonth() + 1) +
        "/" +
        this.state.tempDate.getFullYear(),
      time:
        this.state.tempDate.getHours() + ":" + this.state.tempDate.getMinutes() + ":" + this.state.tempDate.getSeconds()
    });
    this.setState({ timestamp: this.state.date + " " + this.state.time });
  };

  render() {
    return (
      <div>
        <User />
        <hr />
        <p>the Date: {this.state.date } The time: {this.state.time}</p>
        <Addpee useCurrentDateTime={this.useCurrentDateTime} />
        <p>{this.state.timestamp}</p>
        {console.log(this.state.timestamp)}
      </div>
    );
  }
}

//ToDo: send data from state to firebase
//ToDo: return the data from firebase
//ToDo: enter text for comments next to pee and poo
//ToDo: have checkbox if was inside the house or not
//ToDo: have checkbox other place options: inside, floor, pad, outside,
//   usual outside place, balcony, garden, custom{" "}
//ToDo:remove config etc from github
//ToDo: send data to local storage instead so there is no need for internet conenction
