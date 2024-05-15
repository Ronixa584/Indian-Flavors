import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    //Mapping between action and reducer function
    reducers: {
        //Here, state is initialstate and action is data which is coming
        addItem: (state, action) => {
            toast("Successfully Added in Cart! Add More..");
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

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