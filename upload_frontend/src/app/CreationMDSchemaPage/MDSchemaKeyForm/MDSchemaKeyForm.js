import { useWatch } from "react-hook-form";
import { FormGroup, FormControlLabel, MenuItem } from "@material-ui/core";
import { TextField } from "../../../components/TextField";
import { Checkbox } from "../../../components/Checkbox";

export const MDSchemaKeyForm = () => {
  const withUnit = useWatch({ name: "withUnit" });
  const withPredefinedValues = useWatch({ name: "withPredefinedValues" });

  return (
    <>
      <TextField
        fullWidth
        margin="dense"
        name="key_name"
        label="Key name"
        placeholder="Enter key name..."
      />

      <TextField
        required
        fullWidth
        select
        margin="dense"
        name="key_type"
        label="Key type"
      >
        <MenuItem value="string">string</MenuItem>
        <MenuItem value="number">number</MenuItem>
        <MenuItem value="boolean">list</MenuItem>
        <MenuItem value="boolean">boolean</MenuItem>
      </TextField>

      <FormGroup>
        <FormControlLabel
          control={<Checkbox name="withUnit" />}
          label="Use unit"
        />

        {withUnit && (
          <TextField
            fullWidth
            variant="outlined"
            margin="dense"
            name="unit"
            label="Unit"
            placeholder="Enter unit..."
          />
        )}

        <FormControlLabel
          control={<Checkbox name="withPredefinedValues" />}
          label="Use predefined values"
        />

        {withPredefinedValues && (
          <TextField
            fullWidth
            variant="outlined"
            margin="dense"
            name="allowed"
            label="Predefined values"
            placeholder="Enter predefined values..."
          />
        )}

        <FormGroup row={true}>
          <FormControlLabel
            control={<Checkbox name="required" />}
            label="Required"
          />
          <FormControlLabel
            control={<Checkbox name="scan_ref" />}
            label="Scan ref"
          />
          <FormControlLabel
            control={<Checkbox name="changes_likely" />}
            label="Changes likely"
          />
        </FormGroup>
      </FormGroup>
    </>
  );
};
