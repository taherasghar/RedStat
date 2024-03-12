import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "../features/userStatus/statusSlice.js";

const store = configureStore({
  reducer: { userStatus: statusReducer },
});

export default store;
