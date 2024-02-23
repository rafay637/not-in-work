import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/counterSlice";
import user_data_slice from "./Slices/user_data_slice";

const store = configureStore({
  reducer:{
    counter:counterSlice,
    user_data:user_data_slice,
  }
});

export { store };
