import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DateDropdown = ({ range, setRange }) => {
  const handleChange = (event) => {
    setRange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Range</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={range}
          value={range}
          label="Range"
          onChange={handleChange}
        >
          <MenuItem value={"DAY"}>Last 24 hrs</MenuItem>
          <MenuItem value={"WEEK"}>Last Week</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default DateDropdown;
