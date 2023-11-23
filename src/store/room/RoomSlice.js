import { createSlice } from "@reduxjs/toolkit";
import { getAllRooms, getHotelRooms } from "./Room.Action";

const initialState = {
  rooms: [],
  room: {},
  isLoading: false,
  message: null,
};

export const RoomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllRooms.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllRooms.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rooms = action.payload;
      state.message = "Rooms retrived successfully.";
    },
    [getAllRooms.rejected]: (state, action) => {
      state.isLoading = false;
      state.rooms = action.payload;
      state.message = "Room retrived successfully.";
    },
    [getHotelRooms.pending]: (state) => {
      state.isLoading = true;
    },
    [getHotelRooms.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rooms = action.payload;
      state.message = "Rooms retrived successfully.";
    },
    [getHotelRooms.rejected]: (state, action) => {
      state.isLoading = false;
      state.rooms = action.payload;
      state.message = "Room retrived successfully.";
    },
  },
});

export default RoomSlice.reducer;
