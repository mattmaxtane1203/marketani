import { userReducer } from "./reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit";

export default store = configureStore({
  reducer: {
    user: userReducer,
  },
});
