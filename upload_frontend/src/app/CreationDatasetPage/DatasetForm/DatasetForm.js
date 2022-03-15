import { Grid, MenuItem } from "@material-ui/core";
import { TextField } from "../../../components/TextField";
import { Metadata } from "../../../components/Metadata";
import { WarningBox } from "../../../components/WarningBox";
import { KeywordsAutocomplete } from "./KeywordsAutocomplete";
import { TechniquesAutocomplete } from "./TechniquesAutocomplete";
import { SamplesAutocomplete } from "./SamplesAutocomplete";
import { DatasetsAutocomplete } from "./DatasetsAutocomplete";

export const DatasetForm = () => {
  return (
    <Grid container spacing={3}>
      <Grid item sm={2} md={4}>
        <TextField
          fullWidth
          name="datasetName"
          label="Name"
          placeholder="Enter name..."
          InputProps={{
            endAdornment: <WarningBox />,
          }}
        />
      </Grid>

      <Grid item sm={2} md={4}>
        <TextField
          required
          fullWidth
          name="sourceFolder"
          label="Source folder"
          placeholder="Enter source folder..."
          InputProps={{
            endAdornment: <WarningBox />,
          }}
        />
      </Grid>

      <Grid item sm={2} md={4}>
        <TextField
          required
          fullWidth
          name="creationTime"
          label="Creation Time"
          placeholder="Enter creation time..."
        />
      </Grid>

      <Grid item sm={2} md={4}>
        <TextField
          required
          fullWidth
          name="owner"
          label="Owner"
          placeholder="Enter owner..."
        />
      </Grid>

      <Grid item sm={2} md={4}>
        <TextField
          required
          fullWidth
          name="contactEmail"
          label="Contact email"
          placeholder="Enter contact email..."
        />
      </Grid>

      <Grid item sm={2} md={4}>
        <TextField
          required
          fullWidth
          name="ownerGroup"
          label="Owner group"
          placeholder="Enter owner group..."
        />
      </Grid>

      <Grid item sm={2} md={4}>
        <TextField
          required
          fullWidth
          select
          name="type"
          label="Type"
          placeholder="Enter type..."
        >
          <MenuItem value="raw">Raw</MenuItem>
          <MenuItem value="derived">Derived</MenuItem>
        </TextField>
      </Grid>

      <Grid item sm={2} md={4}>
        <KeywordsAutocomplete multiple name="keywords" />
      </Grid>

      <Grid item sm={2} md={4}>
        <TechniquesAutocomplete multiple name="techniques"/>
      </Grid>


      <Grid item sm={2} md={4}>
        <TextField
          fullWidth
          name="group"
          label="Group"
          placeholder="Enter group..."
        />
      </Grid>

      <Grid item sm={2} md={4}>
        <SamplesAutocomplete multiple name="samples"/>
      </Grid>

      <Grid item sm={2} md={4}>
        <DatasetsAutocomplete multiple name="datasets"/>
      </Grid>

      <Grid item sm={2} md={4}>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          name="description"
          label="Dataset description"
          placeholder="Enter description..."
        />
      </Grid>
      
      <Grid item>
        <Metadata baseKey="scientificMetadata" title="Metadata" />
      </Grid>
    </Grid>
  );
};
