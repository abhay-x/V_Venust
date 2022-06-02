// application UIs are dynamic and change over time
// State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating component pure function rule.
// State is similar to props, but it is private and fully controlled by the component.
import React, { Component } from "react";

// convert a function component like Clock to a class used in VRender Component
export default class VState extends Component {
  //Create an ES6 class, with the same name, that extends React.Component.
  render() {
    //Add a single empty method to it called render().Move the body of the function into the render() method.
    return (
      <div>
        <h1>Hello State</h1>
        {/* <h2>{this.props.date.toLocaleTimeString()}</h2> */}
        {/* Replace props with this.props in the render() body. Delete the remaining empty function declaration.*/}
        <br />
      </div>
    );
  }
}
