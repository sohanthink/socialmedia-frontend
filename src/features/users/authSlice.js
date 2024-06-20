import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUser } = userSlice.actions;

export default userSlice.reducer;
