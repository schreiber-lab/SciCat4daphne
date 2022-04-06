import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import {
  Grid,
  Box,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Button,
  Typography,
} from "@material-ui/core";
import { Keys } from "../../../modules/metadata-schemas";
import { TextField } from "../../../components/TextField";
import { CreateMDSchemaKeyModal } from "../CreateMDSchemaKeyModal";

// const useStyles = makeStyles(({ spacing }) => ({
//   textField: {
//     paddingRight: spacing(6),
//   },
// }));

export const MDSchemaForm = () => {
  const [open, setOpen] = useState(false);
  const { setValue, getValues } = useFormContext();
  const keys = useWatch({ name: "keys" });
  console.log(keys);
  const addKey = (key) => {
    setValue("keys", (getValues().keys || []).concat(key));
    console.log((getValues().keys || []).concat(key));
  };

  const openCreationModal = () => {
    setOpen(true);
  };

  const handleCreationModalClose = () => {
    setOpen(false);
  };

  // const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <TextField
            required
            fullWidth
            name="schema_name"
            label="Schema name"
          />
        </Grid>

        <Grid item sm={4}>
          <TextField
            required
            fullWidth
            select
            name="schema_type"
            label="Schema type"
          >
            <MenuItem value="dataset">Dataset</MenuItem>
            <MenuItem value="sample">Sample</MenuItem>
            <MenuItem value="instrument">Instrument</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox />}
            label="Fixed value entries"
          />
        </Grid>
      </Grid>

      <Box pb={2} pt={3}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h5">Schema keys</Typography>
          </Grid>

          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={openCreationModal}
            >
              Add key
            </Button>

            <CreateMDSchemaKeyModal
              isOpen={open}
              onResolve={addKey}
              onClose={handleCreationModalClose}
            />
          </Grid>
        </Grid>
      </Box>

      <Keys keys={keys} />
    </>
  );
};
