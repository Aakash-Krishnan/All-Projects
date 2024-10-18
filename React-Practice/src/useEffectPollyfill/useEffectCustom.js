import { useRef } from "react";

export const useEffectCustom = (cb, deps) => {
  const isFirstRendered = useRef(false);
  const prevDeps = useRef([]);

  if (!isFirstRendered.current) {
    isFirstRendered.current = true;
    const cleanUp = cb();

    return () => {
      if (cleanUp && typeof cleanUp === "function") {
        cleanUp();
      }
    };
  }

  const isChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (isChanged) {
    const cleanUp = cb();

    if (cleanUp && typeof cleanUp === "function" && deps) {
      cleanUp();
    }
  }

  prevDeps.current = deps || [];
};
