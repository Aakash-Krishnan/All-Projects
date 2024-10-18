import useThrottle from "./hooks/useThrottle";
import { useEffect } from "react";
import "./throttleStyle.css";

const Throttle = () => {
  const { dimension, handleDimension } = useThrottle(1000);

  useEffect(() => {
    window.addEventListener("resize", handleDimension);

    return () => {
      window.removeEventListener("resize", handleDimension);
    };
  }, [handleDimension]);

  return (
    <div>
      <p>
        The dimensions are {dimension.width} x {dimension.height}
      </p>
    </div>
  );
};

export default Throttle;
