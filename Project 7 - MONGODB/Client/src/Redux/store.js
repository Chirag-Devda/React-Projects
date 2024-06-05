import { configureStore } from "@reduxjs/toolkit";
import EmailReducer from "../features/UserrEmail/UserEmailSlice";
export const store = configureStore({
  reducer: EmailReducer,
});
