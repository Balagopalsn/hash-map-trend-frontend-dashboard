import React from "react";
import { FC } from "react";
import { FormControl, TextField } from "@mui/material";

const TextInput = ({
  value,
  width,
  onChange,
  label,
  type,
  isError,
  isRequied = false,
}) => {
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width }}>
        <TextField
          id="standard-basic"
          type={type}
          label={label}
          variant="standard"
          value={value}
          error={isError}
          required={isRequied}
          onChange={onChange}
        />
      </FormControl>
    </div>
  );
};

export default TextInput;
