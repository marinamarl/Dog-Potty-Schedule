import React from "react";

export default class Addpee extends React.Component {

    render() {
      return(
        <span>
        <button onClick={this.props.useCurrentDateTime}>Add Pee</button>
        </span>
      )
    }
}
