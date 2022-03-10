import { TextField } from "../../TextField";

export const Row = ({ field, schemaName, baseKey }) => {
  return (
    <TextField
      fullWidth
      required={field.required}
      name={`${baseKey}.${schemaName}.fields.${field.key_name}`}
      label={field.key_name}
      variant="outlined"
      margin="dense"
      // focused
    />
  );
};
