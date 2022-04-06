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
import { MDSchemaKeyForm, validationSchema } from "./MDSchemaKeyForm";

const defaultValues = {
  key_name: null,
  key_type: null,
  unit: null,
  allowed: null,
  required: null,
  scan_ref: null,
  changes_likely: null,
};

export const CreateMDSchemaKeyModal = ({ isOpen, onClose, onResolve }) => {
  //   const { control } = useFormContext()

  const form = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const handleSubmit = (data) => {
    onResolve(data);
    onClose();
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
          </FormProvider>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" color="primary" onClick={onClose}>
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
