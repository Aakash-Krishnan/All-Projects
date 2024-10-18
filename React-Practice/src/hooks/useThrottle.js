import { useState } from "react";

const useThrottle = (delay) => {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [flag, setFlag] = useState(false);

  const handleDimension = () => {
    if (flag) {
      return;
    }
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setFlag(true);

    setTimeout(() => {
      setFlag(false);
    }, delay);
  };

  return { dimension, handleDimension };
};

export default useThrottle;
