import { Grid, FormControlLabel, Checkbox, MenuItem } from "@material-ui/core";
import { TextField } from "../../../components/TextField";

// const useStyles = makeStyles(({ spacing }) => ({
//   textField: {
//     paddingRight: spacing(6),
//   },
// }));

export const MDSchemaForm = () => {
  // const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm={6} md={11}>
        <TextField
          required
          fullWidth
          margin="dense"
          name="schemaName"
          label="Schema name"
        />
      </Grid>
      <Grid item sm={6} md={11}>
        <TextField
          required
          fullWidth
          select
          margin="dense"
          name="schemaType"
          label="Schema type"
        >
        <MenuItem value="dataset">Dataset</MenuItem>
        <MenuItem value="sample">Sample</MenuItem>
        <MenuItem value="instrument">Instrument</MenuItem>
        </TextField>
      </Grid>
      <Grid item>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Fixed value entries"
        />
      </Grid>
    </Grid>
  );
};
