import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import citySlice from "./citySlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    city: citySlice,
  },
});

export default store;

/**
 * Create Store
 * - configureStore() -RTK
 * 
 * Provide my store to app
 * - <Provider store = {store}> - import from react-redux
 * 
 * Slice
 * - RTK - createSlice({
 *          name: "",
 *          initialState:
 *          reducers:{
 *              addItems: (state,action) => {state= action.payload}
 *          }
 * })
 * export const {addItem, removeItem, clearCart} = cartSlice.actions;
 * export default cartSlice.reducer;
 * 
 * Put that Slice into store
 * - {
 *      reducer: {
 *          cart: cartSlice,
 *          user: userSlice
 *      }
 * }
 * 
 */