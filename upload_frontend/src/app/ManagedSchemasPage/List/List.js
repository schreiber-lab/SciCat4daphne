import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  LinearProgress,
  Typography,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getFixedValueEntries } from "../../../redux/fixed-value-entries/operations";
import { Row } from "../../../modules/metadata-schemas/Entries/Row";
import { AddEntryForm } from "../AddEntryForm";

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    margin: spacing(2.5, 10),
    maxWidth: 1100,
  },
  title: {
    marginTop: spacing(4),
    fontSize: 26,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: palette.primary.dark,
    color: palette.getContrastText(palette.primary.dark),
  },
}));

export const List = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [schemaName, setSchemaName] = useState("material");
  const { isLoaded, fixedValueEntries } = useSelector(
    ({ fixedValueEntries }) => fixedValueEntries
  );

  const handleSchemaNameChange = ({ target: { value } }) => {
    dispatch(getFixedValueEntries({ schema_name: value }));
    setSchemaName(value);
  };

  useEffect(() => {
    dispatch(getFixedValueEntries({ schema_name: schemaName }));
  }, []);

  return (
    <Container className={classes.root}>
      {!isLoaded ? (
        <LinearProgress />
      ) : (
        <>
        <Box>
          <Box mb={-5} mt={4} maxWidth={300} mx="auto">
            <TextField
              required
              fullWidth
              select
              margin="dense"
              name="schemaName"
              label="Schema name"
              value={schemaName}
              onChange={handleSchemaNameChange}
            >
              <MenuItem value="material">material</MenuItem>
              <MenuItem value="measurement">measurement</MenuItem>
              <MenuItem value="facility">facility</MenuItem>
              <MenuItem value="beamline">beamline</MenuItem>
              <MenuItem value="beamtime">beamtime</MenuItem>
              <MenuItem value="logbook">logbook</MenuItem>
              <MenuItem value="XRR">XRR</MenuItem>
              <MenuItem value="GIWAXS">GIWAXS</MenuItem>
            </TextField>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <AddEntryForm />
          </Box>
          </Box>
          {!fixedValueEntries.entries.length ? (
            <Typography
              align="center"
              color="primary"
              className={classes.title}
            >
              Fixed value entries of this schema name not found
            </Typography>
          ) : (
            <Box mb={3}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHeaderCell}>
                        Full name
                      </TableCell>

                      <TableCell className={classes.tableHeaderCell}>
                        Material id
                      </TableCell>

                      <TableCell className={classes.tableHeaderCell}>
                        Formula
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {fixedValueEntries.entries?.map((entry) => (
                      <Row key={entry.material_id} field={entry} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </>
      )}
    </Container>
  );
};
