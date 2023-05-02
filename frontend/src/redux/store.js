import { configureStore } from "@reduxjs/toolkit";
import { articlesReducer } from "./articlesSlice";
import { langReducer } from "./langSlice";
// import {} from "./productsSlice";

export const store = configureStore({
  reducer: {
    content: articlesReducer,
    lang: langReducer,
  },
});
