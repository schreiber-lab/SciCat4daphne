import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Container,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useForm, FormProvider } from "react-hook-form";
import { preventDefault } from "../../helpers/preventDefault";
import { yupResolver } from "../../utils/validation";
import * as datasetsApi from "../../api/datasets";
import { validateMetadataSchema } from "../../api/metadata-schemas";
import { addDataset } from "../../redux/datasets/actions";
import { DatasetForm, validationSchema } from "./DatasetForm";
import { SelectDatasetModal } from "../../modules/datasets/SelectDatasetModal";

const defaultValues = {
  datasetName: null,
  sourceFolder: null,
  owner: "Schreiber_lab",
  contactEmail: null,
  creationTime: null,
  ownerGroup: "Schreiber_lab",
  type: null,
  description: null,
  group: "Schreiber_lab",
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

export const CreationDatasetPage = () => {
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formState: { dirtyFields }, ...form } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const handleSubmit = (data) => {
    validateMetadataSchema({
      object_type: "dataset",
      metadata: data.scientificMetadata,
    })
      .then(() => {
        datasetsApi.createDataset(data).then((data) => {
          dispatch(addDataset(data));
          navigate("/datasets");
        });
      })
      .catch(() => {
        enqueueSnackbar(
          "Your dataset wasn't created. Check the data you entered.",
          {
            variant: "error",
          }
        );
      });
    console.log(data.scientificMetadata)
  };

  const openSelectDatasetModal = () => {
    setOpen(true);
  };

  const closeSelectDatasetModal = () => {
    setOpen(false);
  };

  const handleDatasetSelect = ({ pid, ...dataset }) => {
    closeSelectDatasetModal();
    form.reset(dataset);
  };

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs>
          <Typography component="h1" variant="h5" className={classes.title}>
            Add new dataset
          </Typography>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={openSelectDatasetModal}
          >
            Apply template
          </Button>

          <SelectDatasetModal
            isOpen={open}
            onClose={closeSelectDatasetModal}
            onDatasetSelect={handleDatasetSelect}
          />
        </Grid>
      </Grid>

      <form
        noValidate
        onSubmit={preventDefault(form.handleSubmit(handleSubmit))}
      >
        <FormProvider {...form}>
          <DatasetForm />
        </FormProvider>

        <footer className={classes.footer}>
          <Button type="submit" color="primary" variant="contained">
            Add dataset
          </Button>
        </footer>
      </form>
    </Container>
  );
};
