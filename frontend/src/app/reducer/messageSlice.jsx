import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axiosInstance";

const creator = localStorage.getItem("id");

export const getMessage = createAsyncThunk("getMessage", async (member) => {
  const response = await axiosInstance.get(`/message/${creator}/${member}`);
  return response.data.data;
});

export const addMessage = createAsyncThunk("addMessage", async (newContact) => {
  const response = await axiosInstance.post("/message", newContact);
  return response.data.data;
});

const messageSlice = createSlice({
  name: "message",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default messageSlice.reducer;
