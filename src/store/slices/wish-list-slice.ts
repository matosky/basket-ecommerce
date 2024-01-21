// wishlistSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getLocalStorageData, updateLocalStorage } from '@/utils/store';

interface WishListItem {
  id: number;
  thumbnail: string;
  title: string;
}

interface WishlistState {
  items: WishListItem[];
}

const initialState: WishlistState = {
  items: getLocalStorageData('wishlist') || [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishListItem>) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (!existingItem) {
        // Item doesn't exist in the wishlist, add it
        state.items.push(action.payload);
        updateLocalStorage('wishlist', state.items); // Update localStorage
      }
      // You may want to handle a case where the item already exists, maybe show a message
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      // Assuming payload is the id of the item to be removed
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== itemIdToRemove);
      updateLocalStorage('wishlist', state.items); // Update localStorage
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const selectWishlistItems = (state: RootState) => state.wishlist.items;
export default wishlistSlice.reducer;
