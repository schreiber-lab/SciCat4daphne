import { TextField } from "../../../components/TextField";

export const EntryForm = () => {

  return (
    <>
      <TextField
        fullWidth
        margin="dense"
        name="full_name"
        label="Full name"
        placeholder="Enter full name..."
      />

      <TextField
        fullWidth
        margin="dense"
        name="material_id"
        label="Material id"
        placeholder="Enter material id..."
      />

      <TextField
        fullWidth
        margin="dense"
        name="formula"
        label="Formula"
        placeholder="Enter formula..."
      />
    </>
  );
};
