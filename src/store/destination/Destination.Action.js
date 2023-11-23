import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helper";

export const getAllDestinations = createAsyncThunk(
  "getAllDestinations",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/get-all-destinations`);
      return data;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const getSpecificDestination = createAsyncThunk(
  "getSpecificDestination",
  async (args, { rejectWithValue }) => {
    try {
      const destination_id = args;
      const { data } = await axios.get(
        `${BASE_URL}/destination/${destination_id}`
      );
      // console.log(data.data[0]);
      return data.data[0];
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);
