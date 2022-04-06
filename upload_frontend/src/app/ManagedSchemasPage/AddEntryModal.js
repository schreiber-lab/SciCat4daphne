import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { preventDefault } from "../../helpers/preventDefault";
import { yupResolver } from "../../utils/validation";
import { EntryForm, validationSchema } from "./AddEntryForm";

const defaultValues = {
  full_name: null,
  material_id:  null,
  formula: null,
};

export const AddEntryModal = ({ isOpen, onClose, onResolve }) => {

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
        <DialogTitle>Add new entry</DialogTitle>
        <DialogContent>
          <FormProvider {...form}>
            <EntryForm />
          </FormProvider>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" color="primary" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit" color="primary" variant="contained">
            Add entry
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
