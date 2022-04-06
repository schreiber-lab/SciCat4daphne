import { TableCell, TableRow } from "@material-ui/core";

export const Row = ({ field }) => {
  return (
    <TableRow>
      <TableCell>{field.key_name}</TableCell>
      <TableCell>{field.type}</TableCell>
      <TableCell>{field.unit || "-"}</TableCell>
      <TableCell>{String(field.required)}</TableCell>
      <TableCell>{String(field.scan_ref)}</TableCell>
      <TableCell>{String(field.changes_likely)}</TableCell>
      <TableCell>{field.allowed?.join(", ") || "-"}</TableCell>
    </TableRow>
  );
};
