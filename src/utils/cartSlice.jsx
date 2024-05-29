// import { createSlice } from "@reduxjs/toolkit";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: [],
//     },
//     //Mapping between action and reducer function
//     reducers: {
//         //Here, state is initialstate and action is data which is coming
//         addItem: (state, action) => {
//             toast("Successfully Added in Cart! Add More..");
//             state.items.push(action.payload);
//         },
//         removeItem: (state, action) => {
//             state.items.pop();
//         },
//         clearCart: (state) => {
//             state.items = [];
//         },
//     },
// });

// export const {addItem, removeItem, clearCart} = cartSlice.actions;

// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Helper function to save state to localStorage
const saveStateToLocalStorage = (state) => {
  localStorage.setItem("cartItems", JSON.stringify(state.items));
};

// Helper function to load state from localStorage
const loadStateFromLocalStorage = () => {
  const savedState = localStorage.getItem("cartItems");
  return savedState ? JSON.parse(savedState) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadStateFromLocalStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      toast("Successfully Added in Cart! Add More..");
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveStateToLocalStorage(state);
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
      saveStateToLocalStorage(state);
    },
    clearCart: (state) => {
      state.items = [];
      saveStateToLocalStorage(state);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;


//Why this such type of export
// So, i backend it stores slices as
// cartSlice = {
//     actions:{
//         addItem,
//         removeItem,
//         clearCart
//     },
//     reducer: reducers
// }
