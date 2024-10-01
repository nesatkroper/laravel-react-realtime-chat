import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axiosInstance";

const creator_id = localStorage.getItem("id");

export const fetchContact = createAsyncThunk("fetchContact", async () => {
  const res = await axiosInstance.get(`/contact/${creator_id}`);
  return res.data.data;
});

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
    data: [""],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContact.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchContact.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchContact.rejected, (state, action) => {
      state.error = true;
    });
  },
  reducers: {},
});

export default contactSlice.reducer;
