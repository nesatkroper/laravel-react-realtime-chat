import { configureStore } from "@reduxjs/toolkit";
import userReduce from "@/app/reducer/userSlice";
// import contactReduce from "@/app/contact/contactSlice";

export default configureStore({
  reducer: {
    user: userReduce,
    //   contact: contactReduce,
  },
});
