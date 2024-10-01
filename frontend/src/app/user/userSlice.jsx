// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "@/config/axiosInstance";

// export const fetchUser = createAsyncThunk("fetchUser", async () => {
//   const res = await axiosInstance.get("/user");
//   return res.data;
// });

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     loading: false,
//     data: [""],
//     error: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchUser.pending, (state, action) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchUser.fulfilled, (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//     });
//     builder.addCase(fetchUser.rejected, (state, action) => {
//       state.error = true;
//     });
//   },
//   reducers: {},
// });

// export default userSlice.reducer;

//

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axiosInstance";

export const getUser = createAsyncThunk("getUser", async () => {
  const response = await axiosInstance.get("/user");
  return response.data;
});

// export const addItem = createAsyncThunk("items/addItem", async (newItem) => {
//   const response = await axiosInstance.post("apiUrl", newItem);
//   return response.data;
// });

// export const updateItem = createAsyncThunk("items/updateItem", async (item) => {
//   const response = await axiosInstance.put(`${apiUrl}/${item.id}`, item);
//   return response.data;
// });

// export const deleteItem = createAsyncThunk("items/deleteItem", async (id) => {
//   await axiosInstance.delete(`${apiUrl}/${id}`);
//   return id;
// });

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      return action.payload;
    });
    // .addCase(addItem.fulfilled, (state, action) => {
    //   state.push(action.payload);
    // })
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

export default userSlice.reducer;
