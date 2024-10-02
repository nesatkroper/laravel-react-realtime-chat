import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axiosInstance";

const creator = localStorage.getItem("id");

export const getContact = createAsyncThunk("getContact", async () => {
  const response = await axiosInstance.get(`/contact/${creator}}`);
  return response.data.data;
});

export const getOnlyContact = createAsyncThunk(
  "getOnlyContact",
  async (member) => {
    const response = await axiosInstance.get(`/contact/${creator}/${member}`);
    return response.data.data;
  }
);

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
      .addCase(getContact.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default messageSlice.reducer;
