import { createSlice } from "@reduxjs/toolkit";
import { getAllHotels, getHotel, getDestinationHotel } from "./Hotel.Action";

const initialState = {
  hotel: {},
  hotels: [],
  isLoading: false,
  message: null,
};

export const HotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllHotels.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllHotels.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hotels = action.payload;
      state.message = "Hotels retrived successfully.";
    },
    [getAllHotels.rejected]: (state) => {
      state.isLoading = false;
      state.message = "Failed to retrive hotels.";
    },
    [getHotel.pending]: (state) => {
      state.loading = true;
    },
    [getHotel.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hotel = action.payload;
    },
    [getHotel.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = "Failed to retrive hotel.";
    },
    [getDestinationHotel.pending]: (state) => {
      state.loading = true;
    },
    [getDestinationHotel.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hotels = action.payload;
    },
    [getDestinationHotel.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = "Failed to retrive hotel.";
    },
  },
});

export default HotelSlice.reducer;
