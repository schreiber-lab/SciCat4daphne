import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Container,
  makeStyles,
  Box,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { preventDefault } from "../../helpers/preventDefault";
import { yupResolver } from "../../utils/validation";
import * as samplesApi from "../../api/samples";
import { addSample } from "../../redux/samples/actions";
import { MDSchemaForm, validationSchema } from "./MDSchemaForm";
import { CreateMDSchemaKeyModal } from "./CreateMDSchemaKeyModal";
// import AddIcon from "@material-ui/icons/Add";

const defaultValues = {
  schemaName: null,
  schemaType: null,
};

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
  },
  title: {
    alignItems: "center",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export const CreationMDSchemaPage = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openCreationModal = () => {
    setOpen(true);
  };

  const handleCreationModalClose = () => {
    setOpen(false);
  };

  const form = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const handleSubmit = (data) => {
    samplesApi.createSample(data).then((data) => {
      dispatch(addSample(data));
      navigate("/md-schema");
    });
  };

  return (
    <Container className={classes.root}>
      <Typography component="h1" variant="h5" className={classes.title}>
        Schema entry
      </Typography>

      <form
        noValidate
        onSubmit={preventDefault(form.handleSubmit(handleSubmit))}
      >
        <FormProvider {...form}>
          <MDSchemaForm />
        </FormProvider>

        <footer className={classes.footer}>
          <Box position="fixed" bottom={310} left={220}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={openCreationModal}
            >
              Add key
            </Button>
            <CreateMDSchemaKeyModal
              isOpen={open}
              onClose={handleCreationModalClose}
            />
          </Box>
          <Button type="submit" color="primary" variant="contained">
            Create MD schema
          </Button>
        </footer>
      </form>
    </Container>
  );
};
