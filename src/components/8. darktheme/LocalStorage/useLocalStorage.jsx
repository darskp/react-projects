import {useEffect, useState} from "react";

const useLocalStorage = (key, defaultValue) => {
  const [theme, setTheme] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) === null
      ? defaultValue
      : JSON.parse(localStorage.getItem(key));
  });

  const toggleTheme = () => {
    setTheme((pre) => (pre == "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [theme, key]);

  return {theme, toggleTheme};
};

export default useLocalStorage;
