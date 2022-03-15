import { useState, useContext } from "react";
import { Fab, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { CreateDatasetModal } from "./CreateDatasetModal";
import { DatasetsContext } from "../../../modules/datasets";

export const CreateDatasetButton = () => {
  const [open, setOpen] = useState(false);
  const { addDataset } = useContext(DatasetsContext);

  const openCreationModal = () => {
    setOpen(true);
  };

  const handleCreationModalClose = () => {
    setOpen(false);
  };

  return (
    <Box position="fixed" bottom={16} right={32}>
      <Fab color="primary" onClick={openCreationModal}>
        <AddIcon />
      </Fab>

      <CreateDatasetModal
        isOpen={open}
        onClose={handleCreationModalClose}
        onDatasetCreate={addDataset}
      />
    </Box>
  );
};
