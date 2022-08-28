import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const TagDropdown = ({ tag, setTag, tags}) => {
  const onSelectTag = (event, value) => {
    setTag(value);
  };
  return (
    <Stack spacing={3} sx={{ width: 400 }}>
      <Autocomplete
        onChange={onSelectTag}
        multiple
        id="tags-outlined"
        options={tags}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label="Tags" placeholder="Search" />
        )}
      />
    </Stack>
  );
};

export default TagDropdown;
