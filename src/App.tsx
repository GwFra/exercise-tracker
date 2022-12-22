import * as React from 'react'
import './App.css';
import { Avatar, Stack } from '@mui/material';

function App() {
  return (
    <div className="App">
      <span>Welcome John</span>
      <Stack direction={"row"} spacing={2}>
        <Avatar>J</Avatar>
      </Stack>
    </div>
  );
}

export default App;
