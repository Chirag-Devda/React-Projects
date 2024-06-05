import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Email: "",
};

export const EmailSlice = createSlice({
  name: "Email",
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      state.Email = action;
    },
  },
});
export const { updateEmail } = EmailSlice.actions;

export default EmailSlice.reducer;
