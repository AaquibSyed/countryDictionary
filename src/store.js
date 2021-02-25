import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./features/AppSlice";

export default configureStore({
  reducer: {
    counter: AppReducer,
  },
});
