// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cart-slice';
import wishlistReducer from './wish-list-slice';

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  // Add other reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
