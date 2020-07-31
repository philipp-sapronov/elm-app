import React, { ChangeEvent } from "react";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete, { AutocompleteGetTagProps } from "@material-ui/lab/Autocomplete";

type Option = { _id: string; label: string };
export type AutocompleteOption = Option;

type Props = {
  options: Option[];
  onChange: (value: { name: string; value: Option[] }) => void;
  value: Option[];
  placeholder?: string;
  label: string;
  name: string;
};

export const SelectAutocomplete = (props: Props) => {
  const { options, onChange, value, placeholder, label, name } = props;

  const handleChange = (_: ChangeEvent<{}>, newValue: Option[]) => {
    onChange({ name, value: newValue });
  };

  const renderTags = (tagValue: Option[], getTagProps: AutocompleteGetTagProps) =>
    tagValue.map((option, index) => {
      if (option === undefined || option === null) return null;
      return (
        <Chip
          size="small"
          color="primary"
          label={getOptionLabel(option)}
          {...getTagProps({ index })}
        />
      );
    });

  const getOptionLabel = (item: Option) => item.label;

  return (
    <Autocomplete
      multiple
      value={value}
      onChange={handleChange}
      options={options}
      renderTags={renderTags}
      getOptionLabel={getOptionLabel}
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
