import { MenuItem, InputAdornment } from "@material-ui/core";
import { Autocomplete } from "../../Autocomplete";
import { TextField } from "../../TextField";

export const fieldsMap = {
  string: ({ field, ...props }) => {
    const textFieldProps = !field.allowed
      ? {}
      : {
          select: true,
          children: field.allowed.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          )),
        };

    return (
      <TextField
        fullWidth
        variant="outlined"
        margin="dense"
        InputProps={!field.unit ? null : {
          endAdornment: <InputAdornment position="end">{field.unit}</InputAdornment>
        }}
        {...props}
        {...textFieldProps}
      />
    );
  },

  list: ({ field, ...props }) => {
    return (
      <Autocomplete
        fullWidth
        isCreatable
        multiple
        variant="outlined"
        margin="dense"
        onCreate={(value) => console.log(value) || Promise.resolve(value)}
        {...props}
      />
    );
  },
};
