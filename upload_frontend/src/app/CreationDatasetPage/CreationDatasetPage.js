import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Container,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { preventDefault } from "../../helpers/preventDefault";
import { yupResolver } from "../../utils/validation";
import * as datasetsApi from "../../api/datasets";
import { addDataset } from "../../redux/datasets/actions";
import { DatasetForm, validationSchema } from "./DatasetForm";
import { SelectDatasetModal } from "../../modules/datasets/SelectDatasetModal";

const defaultValues = {
  datasetName: null,
  sourceFolder: null,
  // size: null,
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
  const [ open, setOpen ] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const handleSubmit = (data) => {
    datasetsApi.createDataset(data).then((data) => {
      dispatch(addDataset(data));
      navigate("/datasets");
    });
  };

  const openSelectDatasetModal = () => {
    setOpen(true);
  };

  const closeSelectDatasetModal = () => {
    setOpen(false);
  };

  const handleDatasetSelect = (dataset) => {
    closeSelectDatasetModal();
    form.reset(dataset, {

    });
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
          <Button variant="contained" color="primary" onClick={openSelectDatasetModal}>
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