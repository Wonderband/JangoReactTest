import { configureStore } from "@reduxjs/toolkit";
// import { articlesReducer } from "./articlesSlice";
import { globalReducer } from "./globalSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
