import { TextField } from "../../../components/TextField";
import { MenuItem } from "@material-ui/core";

export const MDSchemaKeyForm = () => {
  return (
    <>
      <TextField
        fullWidth
        margin="dense"
        name="keyName"
        label="Key name"
        placeholder="Enter key name..."
      />
      <TextField
        required
        fullWidth
        select
        margin="dense"
        name="keyType"
        label="Key type"
      >
        <MenuItem value="string">string</MenuItem>
        <MenuItem value="number">number</MenuItem>
        <MenuItem value="boolean">boolean</MenuItem>
      </TextField>
    </>
  );
};
