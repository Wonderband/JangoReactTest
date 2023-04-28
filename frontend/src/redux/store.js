import { configureStore } from "@reduxjs/toolkit";
import { articlesReducer } from "./articlesSlice";
// import {} from "./productsSlice";

export const store = configureStore({
  reducer: {
    content: articlesReducer,
    // lang: langReducer,
  },
});
