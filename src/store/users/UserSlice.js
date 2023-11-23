import { createSlice } from "@reduxjs/toolkit";
import { signIn, addNewUser } from "./User.Action";

const initialState = {
  users: [],
  user: {},
  isLoading: false,
  message: null,
  isSuccessfullySignedIn: false,
  isUserCreated: false,
};

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [addNewUser.pending]: (state) => {
      state.isLoading = true;
    },
    [addNewUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.message = "User signed up successfully.";
      state.isUserCreated = true;
    },
    [addNewUser.rejected]: (state) => {
      state.isLoading = false;
      state.message = "Failed to sign up user.";
      state.isUserCreated = false;
    },
    [signIn.pending]: (state) => {
      state.isLoading = true;
    },
    [signIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.message = "User signed in successfully.";
      state.isSuccessfullySignedIn = true;
    },
    [signIn.rejected]: (state) => {
      state.isLoading = false;
      state.message = "Failed to sign in user.";
      state.isSuccessfullySignedIn = false;
    },
  },
});

export default UserSlice.reducer;
