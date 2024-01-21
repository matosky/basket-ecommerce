// CustomTable.tsx
import React from "react";
import { TableContainer, Paper } from "@mui/material";
import { CustomTableBody } from "../table-body/table-body";
import { CartItem, WishListItem } from "@/types/types";
import { CustomTableHead } from "@/components/common/table-head/table-head";

interface CustomTableProps {
  data: CartItem[] | WishListItem[];
  onDecrease?: (itemId: number) => void;
  onIncrease?: (itemId: number) => void;
  onRemove: (itemId: number) => void;
  columns: string[];
  type: 'cart' | 'wishlist'; 
}

export const CustomTable: React.FC<CustomTableProps> = ({
  data,
  onDecrease,
  onIncrease,
  onRemove,
  columns,
  type,
}) => {
  return (
    <TableContainer component={Paper}>
      <CustomTableHead columns={columns} />
      <CustomTableBody
        data={data}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        onRemove={onRemove}
        type={type}
      />
    </TableContainer>
  );
};
