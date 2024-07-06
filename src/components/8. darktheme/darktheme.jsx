import React from "react";
import LightDarkTheme from "./LocalStorage/index.jsx";

const Darktheme = () => {
  return (
    //using themecontext
    // <ThemeProvider>
    //   <Home />
    // </ThemeProvider>

    //using local storage
    <LightDarkTheme />
  );
};

export default Darktheme;
