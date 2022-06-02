import { useState } from "react";
import React, { useEffect } from "react";
//useEffect Hook allows you to perform side effects in your components.
//some side effects are: fetching data, directly updating the DOM, and timers.
//accepts two arguments. The second argument is optional. useEffect(<function>, <dependency>)

export default function VuseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
    // so, It keeps counting even though it should only count once!
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
    setCalculation(count * 2);
  },[count]);
  return (
    <>
      <h1>
        count : {count}, calc:{calculation}
      </h1>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <br/>
    </>
  );
}

// 1. No dependency passed:
// useEffect(() => {
//   Runs on every render
// });

// 2. An empty array:
// useEffect(() => {
//   Runs only on the first render
// }, []);

// 3. Props or state values:
// useEffect(() => {
//   Runs on the first render
//   And any time any dependency value changes
// }, [prop, state]);
