import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    deleteFormCart: (state, action) => {
      return state.filter((item) => item.id != action.payload.id);
    },
  },
});

export const { addToCart, deleteFormCart } = cartSlice.actions;

export default cartSlice.reducer;