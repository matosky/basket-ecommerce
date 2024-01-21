// WishListModal.tsx
import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { WishListItem } from "@/types/types";
import { CustomTable } from "../../table/table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/slices/root-reducer";
import { removeFromWishlist } from "@/store/slices/wish-list-slice";

interface WishListModalProps {
  open: boolean;
  onClose: () => void;
}

export const WishListModal: React.FC<WishListModalProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const wishItemsFromStore: WishListItem[] = useSelector((state: RootState) => state.wishlist.items);

  useEffect(() => {
    setWishItems(wishItemsFromStore);
  }, [wishItemsFromStore]);
  
  const [wishItems, setWishItems] = useState<WishListItem[]>(wishItemsFromStore);

  const handleRemoveItem = (itemId: number) => {
    setWishItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    dispatch(removeFromWishlist(itemId)); 
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: 3,
          minWidth: 500, 
          maxWidth: 800, 
          '@media (max-width:600px)': { 
            minWidth: "90%", 
            maxWidth: "90%", 
            marginLeft: 0,   
            marginRight: 0,   
          },
        }}
      >
        <Typography variant="h5" gutterBottom>
          Wishlist Details
        </Typography>

        <CustomTable
          data={wishItems}
          onRemove={handleRemoveItem}
          columns={['Item Details', 'Action']}
          type="wishlist"
        />

        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
