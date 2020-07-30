import React, { ChangeEvent } from "react";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete, { AutocompleteGetTagProps } from "@material-ui/lab/Autocomplete";

type Props = {
  options: string[];
  onChange: (value: { name: string; value: string[] }) => void;
  value: string[];
  placeholder?: string;
  label: string;
  name: string;
};

export const SelectAutocomplete = (props: Props) => {
  const { options, onChange, value, placeholder, label, name } = props;

  const handleChange = (_: ChangeEvent<{}>, newValue: string[]) => {
    onChange({ name, value: newValue });
  };

  const renderTags = (tagValue: string[], getTagProps: AutocompleteGetTagProps) =>
    tagValue.map((option, index) => {
      if (option === undefined) return null;
      return <Chip size="small" color="primary" label={option} {...getTagProps({ index })} />;
    });

  return (
    <Autocomplete
      multiple
      value={value}
      onChange={handleChange}
      options={options}
      renderTags={renderTags}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          fullWidth
          size="small"
          variant="outlined"
          placeholder={placeholder}
        />
      )}
    />
  );
};
