import React, { useContext, useState } from "react";
import "./App.css";
import { Avatar, Stack } from "@mui/material";
import ThemeContext, { ThemeProvider, themes } from "./contexts/theme";

function ThemeButton (props: {toggleTheme: () => void}) {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div onClick={props.toggleTheme} style={{backgroundColor: theme.background}}>
      Click me to change theme
    </div>
  );
}

function App () {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };
  return (
    <div className="App">
      <span>Welcome John</span>
      <Stack direction={"row"} spacing={2}>
        <Avatar>J</Avatar>
      </Stack>
      <ThemeProvider value={theme} >
        <ThemeButton toggleTheme={toggleTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
