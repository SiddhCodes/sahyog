import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../services/axiosInstance.js";

export const loginEmployee = createAsyncThunk(
  "auth/login",

  async (credentials, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message,
      );
    }
  },
);

export const logedInEmployee = createAsyncThunk(
  "auth/me",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/auth/me");
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message,
      );
    }
  },
);
