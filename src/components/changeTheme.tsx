import React, { useContext } from "react";
import { Button } from "@mui/material";
import ThemeContext from "../contexts/theme";

type Props = {
    toggleTheme: () => void
}

export default function ThemeButton (props: Props) {
  const theme = useContext(ThemeContext);
  return (
    <Button onClick={props.toggleTheme} style={{backgroundColor: theme.background}} />
  );
}