import React, { useState } from "react";
import "./App.css";
import { Avatar, Stack } from "@mui/material";
import { ThemeProvider, themes } from "./contexts/theme";
import ThemeButton from "./components/changeTheme";

// Context vs redux? Multiple operations on redux
// editing existing workouts or something?

function App () {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };
  return (
    <div className="App">
      <span>Welcome John</span>
      <Stack direction={"row"} spacing={2}>
        <Avatar style={{backgroundColor: theme.background}}>J</Avatar>
      </Stack>
      <ThemeProvider value={theme} >
        <ThemeButton toggleTheme={toggleTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
