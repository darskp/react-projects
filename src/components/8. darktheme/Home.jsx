import React from "react";
import {useTheme} from "./ThemeContext";
import {
  DarkthemeContainer,
  TextContainer,
  ThemedButton,
} from "./StyledComponents";

const Home = () => {
  const {isDarkTheme, toggleTheme} = useTheme();

  return (
    <DarkthemeContainer theme={isDarkTheme}>
      <TextContainer theme={isDarkTheme}>
        <h3>Hello World</h3>
        <ThemedButton theme={isDarkTheme} onClick={toggleTheme}>
          Change Theme
        </ThemedButton>
      </TextContainer>
    </DarkthemeContainer>
  );
};

export default Home;
