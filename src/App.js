import React from "react";
import styles from './App.css'

export default class MyComponent extends React.Component {
  state = {
    bmoves:[{value: "pee"},{value: "poo"}]
  };


  render() {
    return (
      <span>
      {this.state.bmoves.map(item => (
        <button>{item.value}</button>
      ))}
      </span>
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
