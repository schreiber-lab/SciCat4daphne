import { TableCell, TableRow } from "@material-ui/core";

export const Row = ({ field }) => {
  return (
    <TableRow>
      <TableCell>{field.full_name || "DIP: 0.8, PEN: 0.2"}</TableCell>
      <TableCell>{field.material_id}</TableCell>
      <TableCell>{field.formula || "-"}</TableCell>
    </TableRow>
  );
};
