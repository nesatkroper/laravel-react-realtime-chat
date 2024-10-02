import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axiosInstance";

const creator = localStorage.getItem("id");

export const getChater = createAsyncThunk("getChater", async (member) => {
  const response = await axiosInstance.get(`/contact/${creator}/${member}`);
  return response.data.data;
});

const chaterSlice = createSlice({
  name: "chater",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChater.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default chaterSlice.reducer;
