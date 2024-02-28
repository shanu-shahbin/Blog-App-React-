import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice.js";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
  }

})

export default store;