import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoraedValue] = useState(() => {
    try {
      return localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : initialValue;
    } catch (err) {
      console.error("ERROR", err);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const toSetValue = value instanceof Function ? value(storedValue) : value;
      setStoraedValue(toSetValue);
      localStorage.setItem(key, JSON.stringify(toSetValue));
    } catch (err) {
      console.error(err);
      return err;
    }
  };

  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setStoraedValue(initialValue);
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue, removeValue];
};
