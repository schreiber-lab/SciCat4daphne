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
    const isNumber = field.schema?.type === "number";

    return (
      <Autocomplete
        fullWidth
        isCreatable
        multiple
        variant="outlined"
        margin="dense"
        onCreate={(value) => Promise.resolve(isNumber ? +value : value)}
        {...props}
      />
    );
  },
};
