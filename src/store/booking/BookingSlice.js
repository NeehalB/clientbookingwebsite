import { createSlice } from "@reduxjs/toolkit";
import { addBooking, userBookings } from "./Booking.Action";

const initialState = {
  bookings: [],
  booking: {},
  isLoading: false,
  message: null,
};

export const BookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: {
    [addBooking.pending]: (state) => {
      state.isLoading = true;
    },
    [addBooking.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.booking = action.payload;
      state.message = "Hotel booked successfully.";
    },
    [addBooking.rejected]: (state) => {
      state.isLoading = false;
      state.message = "Failed to book hotel room.";
    },
    [userBookings.pending]: (state) => {
      state.isLoading = true;
    },
    [userBookings.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookings = action.payload;
    },
    [userBookings.rejected]: (state) => {
      state.isLoading = false;
      state.message = "Failed to book hotel room.";
    },
  },
});

export default BookingSlice.reducer;
