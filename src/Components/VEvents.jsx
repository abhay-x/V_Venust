import React from "react";

// Just like HTML DOM events, React can perform actions based on user events.
// React has the same events as HTML: click, change, mouseover etc.
// React events are written in camelCase syntax:
// onClick instead of onclick.
// React event handlers are written inside curly braces:
// onClick={shoot}  instead of onClick="shoot()".

export default function VEvents() {
  const shoot = (a, b) => {
    document.getElementById("shoot").innerHTML = "Great shot";
    document.getElementById("shoot").innerHTML = a; //a is undefined for 1st button [object Object]
    
    // 'b' represents the React event that triggered the function,
    // in this case the 'click' event
    alert(b.type);
  };
  return (
    <>
      <p id="shoot"></p>
      <button onClick={shoot}>Take the shot!</button>
      {/* passing Arguments */}
      <button onClick={() => shoot("Missed")}>Take Another the shot!</button>
      {/* Sending the event object manually */}
      <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
    </>
  );
}
