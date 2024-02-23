import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState:initial_state,
  // reducers: {},
});

export default counterSlice.reducer;
