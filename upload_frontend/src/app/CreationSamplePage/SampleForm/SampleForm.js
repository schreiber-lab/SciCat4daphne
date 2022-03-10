import { Grid } from "@material-ui/core";
import { TextField } from "../../../components/TextField";
import { Metadata } from "../../../components/Metadata";

// const useStyles = makeStyles(({ spacing }) => ({
//   textField: {
//     paddingRight: spacing(6),
//   },
// }));

export const SampleForm = () => {
  // const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm={6} md={7}>
        <TextField
          required
          fullWidth
          margin="dense"
          name="description"
          label="Sample Description"
        />
      </Grid>

      <Grid item sm={6} md={7}>
        <TextField fullWidth margin="dense" name="owner" label="owner" />
      </Grid>

      <Grid item sm={6} md={7}>
        <TextField
          required
          fullWidth
          margin="dense"
          name="ownerGroup"
          label="Owner Group"
          placeholder="Use a group you have access to"
        />
      </Grid>

      <Grid item>
        <Metadata baseKey="sampleCharacteristics" objectType="sample" title="Sample Characteristics"/>
      </Grid>
    </Grid>
  );
};
