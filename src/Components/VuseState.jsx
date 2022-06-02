// we are destructuring useState from react as it is a named export.
import React, { useState } from "react";
// useState : keep track of the application state(app data or properties that need to be tracked.)
// Hooks will not work in React class components.
// 3 rules for hooks:
// Hooks can only be called inside React function components.
// Hooks can only be called at the top level of a component.
// Hooks cannot be conditional

export default function VuseState() {
  const [color, setColor] = useState("red"); //initial state can be empty.
  // These names are variables that can be named anything you would like.
  //accepts an initial state(red) and returns two values.
  // The current state (color).
  // A function that is used to updates the state(setColor()).
  const color1 = {
    color: "green",
    padding: "1.5em",
  };
  return (
    <>
      <br />

      <button
        style={color1}
        onClick={() => setColor("Green")}
        //   updating the state
      >
        VuseState {color}
        {/* //reading the current state */}
      </button>

      <MultipleHooks />
      <SingleHooksObj />
      <br />
    </>
  );
}

//Multiple state hooks: to track individual values.
function MultipleHooks() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");

  return (
    <>
      <h1>
        {brand} {model} {year}.
      </h1>
    </>
  );
}

function SingleHooksObj() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
  });

  const updateColor = () => {
    setCar((prevState) => {
      // ... spread operator receives the previous value.
      return { ...prevState, color: "blue" };
    });
  };

  return (
    <>
      <h1>
        {/* //reference the object and then the property of that object */}
        {car.brand} {car.model} {car.color} {car.year}.{/* When state is updated, the entire state gets overwritten. */}
        <button onClick={() => setCar({ color: "blue" })}>Update</button>
        {/* If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.its overwrite the object */}
        {/* use JavaScript spread operator to update only the color of the car: */}
        <button onClick={updateColor}>update only</button>
      </h1>
    </>
  );
}

//useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
// Custom Hooks
// If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.
