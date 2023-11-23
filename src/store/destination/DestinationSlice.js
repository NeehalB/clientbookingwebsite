import { createSlice } from "@reduxjs/toolkit";
import { getAllDestinations, getSpecificDestination } from "./Destination.Action";

const initialState = {
  destination: {},
  destinations: [],
  isLoading: false,
  message: null,
};

export const DestinationSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllDestinations.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllDestinations.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.destinations = action.payload;
      state.message = "Destinations retrived successfully.";
    },
    [getAllDestinations.rejected]: (state) => {
      state.isLoading = false;
      state.message = "Failed to retrive destinations.";
    },
    [getSpecificDestination.pending]: (state) => {
      state.isLoading = true;
    },
    [getSpecificDestination.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.destination = action.payload;
      state.message = "Destination retrived successfully.";
    },
    [getSpecificDestination.rejected]: (state) => {
      state.isLoading = false;
      state.message = "Failed to retrive destination.";
    },
  },
});

export default DestinationSlice.reducer;
