import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helper";

export const signIn = createAsyncThunk(
  "signIn",
  async (userData, { rejectWithValue }) => {
    console.log(userData);
    try {
      const { data } = await axios.post(`${BASE_URL}/sign-in`, userData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.data));
      // console.log(data.data);
      return data;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      console.log(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const addNewUser = createAsyncThunk(
  "addNewUser",
  async (userData, { rejectWithValue }) => {
    console.log(userData)
    try {
      const { data } = await axios.post(`${BASE_URL}/sign-up`, userData);
      return data;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      console.log(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);
