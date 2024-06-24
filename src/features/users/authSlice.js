import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("user")) || null,
};

export const userSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    loggedInUsers: (state, action) => {
      state.userInfo = action.payload;
    },
    logggedOutUsers: (state) => {
      state.userInfo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUser, loggedInUsers, logggedOutUsers } = userSlice.actions;

export default userSlice.reducer;
