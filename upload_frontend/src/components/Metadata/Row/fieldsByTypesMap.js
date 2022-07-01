import { useFormContext } from "react-hook-form";
import { MenuItem, InputAdornment } from "@material-ui/core";
import { Autocomplete } from "../../Autocomplete";
import { TextField } from "../../TextField";
import { NumberMaskField } from "../../NumberMaskField";

export const fieldsByTypesMap = {
  string: ({ name, field, ...props }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formContext = useFormContext();

    if (field.unit) {
      formContext.setValue(name + ".unit", field.unit);
      //{"entries": [{qq: { unit:"mm"} }]}
      //{"entries": [{qq: { unit:"mm", value: 5} }]}
      //{"entries": [{qq: "value"]}
    }

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
        name={field.unit ? name + ".value" : name}
        InputProps={
          !field.unit
            ? null
            : {
                endAdornment: (
                  <InputAdornment position="end">{field.unit}</InputAdornment>
                ),
              }
        }
        {...props}
        {...textFieldProps}
      />
    );
  },

  number: ({ field, name, ...props }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formContext = useFormContext();

    if (field.unit) {
      formContext.setValue(name + ".unit", field.unit);
    }

    return (
      <NumberMaskField
        fullWidth
        name={field.unit ? name + ".value" : name}
        variant="outlined"
        margin="dense"
        InputProps={
          !field.unit
            ? null
            : {
                endAdornment: (
                  <InputAdornment position="end">{field.unit}</InputAdornment>
                ),
              }
        }
        {...props}
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
