// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { updateLocalStorage, getLocalStorageData } from '@/utils/store'; 

interface CartItem {
  id: number;
  thumbnail: string;
  title: string;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: getLocalStorageData('cart') || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        // Item already exists in the cart, increase quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // Item not in the cart, add it
        state.items.push(action.payload);
      }

      updateLocalStorage('cart', state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      updateLocalStorage('cart', state.items);
    },
    updateCartItemQuantity: (state, action: PayloadAction<{ itemId: number; quantity: number }>) => {
      const { itemId, quantity } = action.payload;
      const targetItem = state.items.find(item => item.id === itemId);

      if (targetItem) {
        targetItem.quantity += quantity;

        if (targetItem.quantity <= 0) {
          // If quantity becomes zero or negative, remove the item from the cart
          state.items = state.items.filter(item => item.id !== itemId);
        }
      }

      updateLocalStorage('cart', state.items);
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity } = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart.items;
export default cartSlice.reducer;
