import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/users/authSlice";
import { authApi } from "../features/users/api/authApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    registration: authSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
