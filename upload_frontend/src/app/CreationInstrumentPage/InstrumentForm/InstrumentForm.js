import { Grid } from "@material-ui/core";
import { TextField } from "../../../components/TextField";

export const InstrumentForm = () => {
  return (
    <Grid container>
      <Grid item sm={6} md={7}>
        <TextField
          required
          fullWidth
          margin="dense"
          name="name"
          label="Name"
        />
      </Grid>
      <Grid item sm={6} md={7}>
        <TextField
          required
          fullWidth
          margin="dense"
          name="customMetadata"
          label="Custom Metadata"
        />
      </Grid>
    </Grid>
  );
};
