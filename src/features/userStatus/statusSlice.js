import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "I'm Available!",
};

const statusSlice = createSlice({
  name: "userStatus",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { changeStatus } = statusSlice.actions;
export default statusSlice.reducer;
