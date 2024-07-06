/*eslint-disable*/

import useLocalStorage from "./useLocalStorage.jsx";
import "./style.css";

const LightDarkTheme = () => {
  const {theme, toggleTheme} = useLocalStorage("theme", "light");

  return (
    <div className="theme" dark-theme={theme}>
      <div>
        <h3>Hello World</h3>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkTheme;
