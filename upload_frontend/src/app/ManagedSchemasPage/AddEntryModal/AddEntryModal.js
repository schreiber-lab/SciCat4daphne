// import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { preventDefault } from "../../../helpers/preventDefault";
import * as fixedValueEntriesApi from "../../../api/fixed-value-entries";
// import {  addFixedValueEntries } from "../../../redux/fixed-value-entries/actions";
import { EntryForm } from "./EntryForm";

export const AddEntryModal = ({ isOpen, schemaName, onClose, onResolve }) => {
  // const dispatch = useDispatch();
  const form = useForm();

  // const handleSubmit = (data) => {
  //   fixedValueEntriesApi
  //   .createFixedValueEntry(data)
  //   .then((data) => {
  //     dispatch(addFixedValueEntries(data));
  //     onClose();
  //   })
  //   .catch(() => {});
  // };

  // const handleSubmit = (data) => {
  //   onResolve(data);
  //   onClose();
  // };

  const handleSubmit = (data) => {
    fixedValueEntriesApi.createFixedValueEntry(data).then(() => {
      onClose();
    });
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <form
        noValidate
        onSubmit={preventDefault(form.handleSubmit(handleSubmit))}
      >
        <DialogTitle>Add new entry for {schemaName}</DialogTitle>
        <DialogContent>
          <FormProvider {...form}>
            <EntryForm schemaName={schemaName} />
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