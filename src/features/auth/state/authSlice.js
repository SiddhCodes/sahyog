import { createSlice } from "@reduxjs/toolkit";
import { logedInEmployee, loginEmployee } from "./authThunk";

const initialState = {
  employee: null,
  isLoading: false,
  //   isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
    },
    removeEmployee: (state) => {
      state.employee = null;
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
      })
      .addCase(loginEmployee.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(logedInEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logedInEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
      })
      .addCase(logedInEmployee.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addEmployee, removeEmployee } = authSlice.actions;

export default authSlice.reducer;
