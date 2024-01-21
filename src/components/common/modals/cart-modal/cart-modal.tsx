import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { CartItem } from "@/types/types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/slices/root-reducer";
import { updateCartItemQuantity, removeFromCart } from "@/store/slices/cart-slice";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const cartItemsFromStore: CartItem[] = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    setCartItems(cartItemsFromStore);
  }, [cartItemsFromStore]);

  const [cartItems, setCartItems] = useState<CartItem[]>(cartItemsFromStore);

  const handleRemoveItem = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    dispatch(removeFromCart(itemId ));
  };

  const handleIncreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    dispatch(updateCartItemQuantity({ itemId, quantity: 1 }));
  };

  const handleDecreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    dispatch(updateCartItemQuantity({ itemId, quantity: -1 }));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
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
            marginLeft: "10px",  
            marginRight: "10px", 
            '@media (max-width:600px)': { 
              minWidth: "90%", 
              maxWidth: "90%", 
              marginLeft: 0,   
              marginRight: 0,   
            },
        }}
      >
        <Typography variant="h5" gutterBottom>
          Cart Details
        </Typography>

        <div>
          {cartItems.map((item) => (
            <ul
              key={item.id}
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                borderBottom: "1px solid #ccc",
                marginBottom: "10px",
              }}
            >
              <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "10px", flexShrink: 0 }}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div style={{ marginBottom: "5px" }}>{item.title}</div>
                  <div style={{ fontSize: "14px", color: "#777" }}>
                    Quantity: {item.quantity}
                  </div>
                </div>
              </li>
              <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "10px", flexShrink: 0 }}>
                  <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <span style={{ margin: "0 5px" }}>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>
                <div>${(item.price * item.quantity).toFixed(2)}</div>
                <div style={{ marginLeft: "auto" }}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove Item
                  </Button>
                </div>
              </li>
            </ul>
          ))}
        </div>

        <Box mt={2}>
          <Typography variant="h6">Total Price: ${getTotalPrice().toFixed(2)}</Typography>
        </Box>

        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

