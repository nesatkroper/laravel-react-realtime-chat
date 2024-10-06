import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axiosInstance";

const creator = localStorage.getItem("id");

export const getContact = createAsyncThunk("getContact", async () => {
  const response = await axiosInstance.get(`/contact/${creator}`);
  return response.data;
});

// export const getOnlyContact = createAsyncThunk(
//   "getOnlyContact",
//   async (member) => {
//     const response = await axiosInstance.get(`/contact/${creator}/${member}`);
//     return response.data.data;
//   }
// );

export const addContact = createAsyncThunk("addContact", async (newContact) => {
  const response = await axiosInstance.post("/contact", newContact);
  return response.data.data;
});

const contactSlice = createSlice({
  name: "contact",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContact.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default contactSlice.reducer;
