import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { TextField } from "../../components/TextField";
import { useForm, FormProvider } from "react-hook-form";
import { preventDefault } from "../../helpers/preventDefault";
import { yupResolver } from "../../utils/validation";
import * as mdSchemaApi from "../../api/md-schema";
import { addMDSchemaKey } from "../../redux/md-schema/actions";
import { MDSchemaKeyForm, validationSchema } from "./MDSchemaKeyForm";

const defaultValues = {
  keyName: null,
  keyType: null,
};

export const CreateMDSchemaKeyModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  //   const { control } = useFormContext()

  const form = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const handleSubmit = (data) => {
    mdSchemaApi
      .createMDSchemaKey(data)
      .then((data) => {
        dispatch(addMDSchemaKey(data));
        onClose();
      })
      .catch(() => {});
    console.log(data);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <form
        noValidate
        onSubmit={preventDefault(form.handleSubmit(handleSubmit))}
      >
        <DialogTitle>Add new key</DialogTitle>
        <DialogContent>
          <FormProvider {...form}>
            <MDSchemaKeyForm />

            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="unit"
              />
              <TextField
                fullWidth
                margin="dense"
                name="unit"
                label=""
                placeholder="Enter unit"
              />

              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="predefined values"
              />
              <TextField
                fullWidth
                margin="dense"
                name="predefinedValue"
                label=""
                placeholder="Enter predefined values"
              />

              <FormGroup row={true}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="required"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="scan_ref"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="changes_likely"
                />
              </FormGroup>
            </FormGroup>
          </FormProvider>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} variant="outlined" color="primary">
            Cancel
          </Button>

          <Button type="submit" color="primary" variant="contained">
            Add key
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
