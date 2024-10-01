import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axiosInstance";

export const getContact = createAsyncThunk("getContact", async (creator) => {
  const response = await axiosInstance.get(`/contact/${creator}}`);
  return response.data;
});

export const getOnlyContact = createAsyncThunk(
  "getContact",
  async (creator, member) => {
    const response = await axiosInstance.get(`/contact/${creator}/${member}`);
    return response.data;
  }
);

export const addContact = createAsyncThunk("addContact", async (newContact) => {
  const response = await axiosInstance.post("/contact", newContact);
  return response.data;
});

// export const updateItem = createAsyncThunk("items/updateItem", async (item) => {
//   const response = await axiosInstance.put(`${apiUrl}/${item.id}`, item);
//   return response.data;
// });

// export const deleteItem = createAsyncThunk("items/deleteItem", async (id) => {
//   await axiosInstance.delete(`${apiUrl}/${id}`);
//   return id;
// });

const contactSlice = createSlice({
  name: "contact",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContact.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getOnlyContact.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
      });
    // .addCase(updateItem.fulfilled, (state, action) => {
    //   const index = state.findIndex((item) => item.id === action.payload.id);
    //   if (index !== -1) {
    //     state[index] = action.payload;
    //   }
    // })
    // .addCase(deleteItem.fulfilled, (state, action) => {
    //   return state.filter((item) => item.id !== action.payload);
    // });
  },
});

export default contactSlice.reducer;
