import React from "react";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
];

export const SelectAutocomplete = () => {
  const [value, setValue] = React.useState([top100Films[1]]);

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setValue([...newValue]);
      }}
      options={top100Films}
      getOptionLabel={(option) => option.title}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, idx) => {
          if (option === undefined) return null;
          return <Chip size="small" color="primary" label={option.title} {...getTagProps({ index: idx })} />;
        })
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="Fixed tag"
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Favorites"
        />
      )}
    />
  );
};
