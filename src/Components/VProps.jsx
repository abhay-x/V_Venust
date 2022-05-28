import React from "react";

// Props are like function arguments in JavaScript and attributes in HTML.
function Car(props) {
  // Receiving the value here
  return <p>I am a {props.brand.model}</p>;
}

function VProps() {
  const car = "Ford";
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <p>Who is in Garage?</p>
      {/* Passing the value here, 
      Props are passed to components via HTML attributes */}
      <Car brand="Ferrari" />
      <Car brand={car} />
      <Car brand={carInfo} />
    </>
  );
}

export default VProps;
//Note: React Props are read-only! You will get an error if you try to change their value.
