import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helper";

export const getAllRooms = createAsyncThunk(
  "getAllRooms",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/get-all-rooms`);
      return data;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      rejectWithValue(errorMessage);
    }
  }
);

export const getHotelRooms = createAsyncThunk(
  "getHotelRooms",
  async (args, { rejectWithValue }) => {
    try {
      const hotel_id = args;
      const { data } = await axios.get(
        `${BASE_URL}/get-hotel-rooms/${hotel_id}`
      );
      return data;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);
