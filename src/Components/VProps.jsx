import React from "react";
//components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
// Props are like function arguments in JavaScript and attributes in HTML.
//Always start component names with a capital letter. React treats components starting with lowercase letters as DOM tag
function Car(props) {
  // Receiving the value here
  return <p>I am a {props.brand.model}</p>;
  // Our Car component returns a <p>I am a Mustang</p> element as the result.
  //React DOM efficiently updates the DOM to match <p>I am a Mustang</p>.
}

function VProps() {
  const car = "Ford";
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <p>Who is in Garage?</p>
      {/* When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”. */}
      {/* React calls the Car component with {brand: 'Ferrari'} as the props. */}
      <Car brand="Ferrari" />
      <Car brand={car} />
      <Car brand={carInfo} />
      <br/>
    </>
  );
}

export default VProps;
// Note: React Props are read-only! You will get an error if you try to change their value.
// Props are Read-Only :must never modify its own props
// Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.
// this function is impure because it changes its own input:
// function withdraw(account, amount) {
//   account.total -= amount;
