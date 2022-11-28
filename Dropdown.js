import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './dropDown.css';

export default function Dropdown() {
  const [Color, setColor] = React.useState('');

  const handleChange = (event) => {
    setColor(event.target.value);

  };

  return (
    <>
        <Box sx={{ minWidth: 120, margin: 5}}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Color}
          label="Color"
          onChange={handleChange}
        >
          <MenuItem value={"lime"}>Lime</MenuItem>
          <MenuItem value={"lavender"}>Lavender</MenuItem>
          <MenuItem value={"crimson"}>Crimson</MenuItem>
          <MenuItem value={"darkblue"}>Darkblue</MenuItem>
          <MenuItem value={"teal"}>Teal</MenuItem>
          <MenuItem value={"rebeccapurple"}>Rebecca Purple</MenuItem>
          <MenuItem value={"ghostwhite"}>Ghost White</MenuItem>
          <MenuItem value={"aquamarine"}>Aqua Marine</MenuItem>
          <MenuItem value={"aliceblue"}>Alice Blue</MenuItem>
          </Select>
          </FormControl>
          </Box>
          <div className="color-changer" style={{'backgroundColor': `${Color}`}}></div>
    </>
  );
}
