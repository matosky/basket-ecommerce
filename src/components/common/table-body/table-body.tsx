// CustomTableBody.tsx
import React from "react";
import { TableBody, TableCell, TableRow, IconButton, Typography, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartItem, WishListItem } from "@/types/types";

interface CustomTableBodyProps {
  data: CartItem[] | WishListItem[];
  onDecrease?: (itemId: number) => void;
  onIncrease?: (itemId: number) => void;
  onRemove: (itemId: number) => void;
  type: 'cart' | 'wishlist'; // Specify the type of data
}

export const CustomTableBody: React.FC<CustomTableBodyProps> = ({
  data,
  onDecrease,
  onIncrease,
  onRemove,
  type,
}) => {
  return (
    <TableBody>
      {data.map((item) => (
        <TableRow key={item.id}>
          <TableCell>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ width: 50, height: 50, objectFit: "cover" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1">{item.title}</Typography>
              </Grid>
            </Grid>
          </TableCell>
          <TableCell sx={{width: "120px"}}>
            {type === 'cart' && onDecrease && 'quantity' in item && (
              <IconButton onClick={() => onDecrease(item.id)}>
                <RemoveIcon />
              </IconButton>
            )}
            {'quantity' in item && item.quantity}
            {type === 'cart' && onIncrease && 'quantity' in item && (
              <IconButton onClick={() => onIncrease(item.id)}>
                <AddIcon />
              </IconButton>
            )}
          </TableCell>
          <TableCell>
            {'quantity' in item && type === 'cart'
              ? `$${(item.price * item.quantity).toFixed(2)}`
              : 'N/A'}
          </TableCell>
          <TableCell>
            <IconButton onClick={() => onRemove(item.id)}>
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
