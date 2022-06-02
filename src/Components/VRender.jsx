import React from "react";

export default function VRender() {
  setInterval(Tick, 1000); //setInterval fn is calling Tick fn
  return <p id="tic">dd</p>; //this content changed by Tick() fn
}

function Tick() {
  document.getElementById("tic").innerHTML = "Its " + new Date().toLocaleTimeString();
}

//React Only Updates What’s Necessary
//React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.
//Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.
// see VStaate to component truly reusable and encapsulated. It will set up its own timer and update itself every second. 