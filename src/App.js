// import logo from "./logo.svg";
import "./App.css";
import VProps from "./Components/VProps";
import VEvents from "./Components/VEvents";
import VRender from "./Components/VRender";
import VBrokeComp from "./Components/VBrokeComp";
import VState from "./Components/VState";
// import VConditionals from "./Components/VConditionals";

import VuseState from "./Components/VuseState";
import VuseEffect from "./Components/VuseEffect";

function App() {
  return (
    <div className="App">
      <VProps />
      ------------------
      <VEvents />
      ------------------
      <VRender />
      ------------------
      <VBrokeComp/>
      ------------------
      <VState/>
      ------------------
      {/* <VConditionals isGoal={true} /> */}
      ------------------
      <VuseState />
      ------------------
      <VuseEffect />
      ------------------
    </div>
  );
}

export default App;
