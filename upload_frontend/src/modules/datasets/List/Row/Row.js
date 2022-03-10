import { TableCell, TableRow, Typography } from "@material-ui/core";

export const Row = ({ dataset, onDatasetSelect, ...props }) => {
  const handleDatasetClick = () => {
    if (onDatasetSelect) {
      onDatasetSelect(dataset);

      return;
    }

    window.open(
      `http://tinybox.am10.uni-tuebingen.de/datasets/${encodeURIComponent(dataset.pid)}`
    );
  };

  return (
    <TableRow onClick={handleDatasetClick} {...props}>
      <TableCell component="th" scope="row">
        <Typography color="primary" variant="subtitle2">
          {dataset.datasetName}
        </Typography>
      </TableCell>
      <TableCell
        align="right"
        style={{ wordWrap: "break-word", maxWidth: 200 }}
      >
        {dataset.sourceFolder}
      </TableCell>
      {/* <TableCell align="right">{dataset.size}</TableCell> */}
      <TableCell align="right">
        <Typography color="primary" variant="subtitle2">
          {new Date(dataset.creationTime).toLocaleDateString('en-US')}
        </Typography>
      </TableCell>
      <TableCell align="right">{dataset.type}</TableCell>
      {/* <TableCell align="right">{dataset.pid}</TableCell> */}
      <TableCell align="right">{dataset.ownerGroup}</TableCell>
    </TableRow>
  );
};
