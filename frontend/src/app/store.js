import { configureStore } from "@reduxjs/toolkit";
import userReduce from "@/app/reducer/userSlice";
import contactReduce from "@/app/reducer/contactSlice";
import chatReduce from "@/app/reducer/chaterSlice";
import messageReduce from "@/app/reducer/messageSlice";

export default configureStore({
  reducer: {
    user: userReduce,
    contact: contactReduce,
    chater: chatReduce,
    message: messageReduce,
  },
});
