import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/users/authSlice";

export const store = configureStore({
  reducer: {
    registration: authSlice,
  },
});
