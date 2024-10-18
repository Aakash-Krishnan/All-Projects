import { useEffect, useRef } from "react";

export const useMemoCustom = (cb, deps) => {
  const cache = useRef(null);

  if (
    !cache.current ||
    JSON.stringify(deps) !== JSON.stringify(cache.current.deps)
  ) {
    cache.current = {
      value: cb(),
      deps,
    };
  }

  useEffect(() => {
    return () => {
      cache.current = null;
    };
  }, []);

  return cache.current.value;
};
