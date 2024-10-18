import { useEffect } from "react";

/* eslint-disable react/prop-types */
const ProgressBar = ({ value, onComplete }) => {
  useEffect(() => {
    if (value === 100) {
      onComplete();
    }
  }, [onComplete, value]);

  return (
    <div
      style={{
        width: "50%",
        border: "1px solid black",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <span
        style={{
          width: "100%",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {value}%
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "24px",
          backgroundColor: "#00c251",
          transform: `scaleX(${value / 100})`,
          transformOrigin: "left",
        }}
      />
    </div>
  );
};

export default ProgressBar;
