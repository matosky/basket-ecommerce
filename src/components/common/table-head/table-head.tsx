import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

interface CustomTableHeadProps {
  columns: string[];
}

export const CustomTableHead: React.FC<CustomTableHeadProps> = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column}>{column}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
