import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helper";

export const getAllHotels = createAsyncThunk(
  "getAllHotels",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/get-all-hotels`);
      return data;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const getHotel = createAsyncThunk(
  "getHotel",
  async (args, { rejectWithValue }) => {
    try {
      const hotel_id = args;
      const { data } = await axios.get(`${BASE_URL}/hotel-rooms/${hotel_id}`);
      // console.log(data.data);
      return data.data;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const getDestinationHotel = createAsyncThunk(
  "getDestinationHotel",
  async (args, { rejectWithValue }) => {
    try {
      const destination_id = args;
      const { data } = await axios.get(
        `${BASE_URL}/hotel-destination/${destination_id}`
      );
      console.log(data);
      return data;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);
