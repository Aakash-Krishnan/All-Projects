import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const ProgressContainer = () => {
  const [value, setValue] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (value >= 100) return;
    const timeout = setTimeout(() => {
      setValue((prev) => prev + 1);
    }, 80);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h1>Progress Bar</h1>
      <ProgressBar value={value} onComplete={() => setCompleted(true)} />
      {completed ? (
        <h2 style={{ color: "green" }}>Completed</h2>
      ) : (
        <h2 style={{ color: "tomato" }}>Loading...</h2>
      )}
    </div>
  );
};

export default ProgressContainer;
