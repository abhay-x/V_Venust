// application UIs are dynamic and change over time
// State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating component pure function rule.
// State is similar to props, but it is private and fully controlled by the component.
import React, { Component } from "react";

//--->convert a function component like Clock to a class used in VRender Component
//Create an ES6 class, with the same name, that extends React.Component.
export default class VState extends Component {
  //components should always call the base constructor with props.
  constructor(props) {
    // Add a class constructor that assigns the initial this.state:
    super(props);
    this.state = { date: new Date() };
  }
  //--->Adding lifecycle mtd to a class
  //applications with many components, it’s important to free up resources taken by the components when they are destroyed.
  // We can declare special methods on the component class to run some code when a component mounts and unmounts:
  // We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.
  componentDidMount() {
    //this mtd runs after the component output has been rendered to the DOM, good place to set up a timer:
    this.timerID = setInterval(() => this.tick(), 1000); //we save timer ID right on this
    // While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID).
  }
  // We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.
  componentWillUnmount() {
    // tear down the timer
    clearInterval(this.timerID);
  }
  //   implement a method called tick() that the Clock component will run every second.
  tick() {
    // It will use this.setState() to schedule updates to the component local state:
    this.setState({
      date: new Date(),
    });
  }
  //render() mtd. Move the body of the fn into the render() mtd.
  render() {
    return (
      <div>
        <h1>Hello State</h1>
        <h2>State: {this.state.date.toLocaleTimeString()}</h2>
        {/* Replace props of the fn with this.props*/}
        {/* Replace this.props.date with this.state.date*/}
        <br />
      </div>
    );
  }
}
