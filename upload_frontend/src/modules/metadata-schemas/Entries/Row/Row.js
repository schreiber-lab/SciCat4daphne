import { TableCell, TableRow } from "@material-ui/core";

export const Row = ({ field, entriesProps }) => {
  return (
    <TableRow>
      {entriesProps.map((property) => (
        <TableCell>{field[property] || "-"}</TableCell>
      ))}
    </TableRow>
  );
};
