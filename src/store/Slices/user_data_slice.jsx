import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  value: true,
};

const user_data_slice = createSlice({
  name: "rafay",
  initialState: initial_state,
});

export default user_data_slice.reducer;
