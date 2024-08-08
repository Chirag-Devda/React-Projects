import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, timestampSeconds, timestampNanoseconds } =
        action.payload;
      // modify the time from the product time
      const time = new Date(
        timestampSeconds * 1000 + timestampNanoseconds / 1000000
      );
      const formattedTime = time.toLocaleString("en-US", {
        // Customize format
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      state.push({
        ...product,
        time: formattedTime,
      });
    },
    deleteFromCart: (state, action) => {
      return state.filter((item) => item.id != action.payload.id);
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
