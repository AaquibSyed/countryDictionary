import { createSlice } from "@reduxjs/toolkit";

export const AppSlice = createSlice({
  name: "App",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = AppSlice.actions;

export const selectCount = (state) => state.counter.value;

export default AppSlice.reducer;
