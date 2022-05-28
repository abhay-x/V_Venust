import logo from "./logo.svg";
import "./App.css";
import VProps from "./Components/VProps";
import VEvents from "./Components/VEvents";
// import VConditionals from "./Components/VConditionals";

import VuseState from "./Components/VuseState";
function App() {
  return (
    <div className="App">
      <VProps />
      <VEvents />
      {/* <VConditionals isGoal={true} /> */}

      <VuseState/>
    </div>
  );
}

export default App;
