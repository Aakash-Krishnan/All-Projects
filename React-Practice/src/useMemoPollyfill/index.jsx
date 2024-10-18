import { useState } from "react";
import { useMemoCustom } from "./useMemoCustom";

const UseMemoPollyfill = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredValue = useMemoCustom(() => {
    console.log("Function called");
    return counter * counter;
  }, [counter]);

  return (
    <div>
      <h1>Counter 1: {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>increment</button>
      <div>squared value {squaredValue}</div>
      <p> Counter2: {counter2}</p>
      <button onClick={() => setCounter2((prev) => prev - 1)}>Dec 2</button>
    </div>
  );
};

export default UseMemoPollyfill;
