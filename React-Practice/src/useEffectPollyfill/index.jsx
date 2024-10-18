import { useState } from "react";
import { useEffectCustom } from "./useEffectCustom";

const UseEffectPollyfill = () => {
  const [count, setCount] = useState(0);

  useEffectCustom(() => {
    console.log("First Render");

    return () => {
      console.log("UNMOUNTED");
    };
  }, []);

  useEffectCustom(() => {
    console.log("Count", count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>inc</button>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev - 1)}>dec</button>
    </div>
  );
};

export default UseEffectPollyfill;
