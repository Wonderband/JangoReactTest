// import { createSlice } from "@reduxjs/toolkit";

// import { getArticles } from "./operations";

// const initialState = {
//   articles: [],
//   page: 1,
//   // error: null,
// };

// const articlesSlice = createSlice({
//   name: "articles",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(getArticles.fulfilled, (state, { payload }) => {
//         state.articles = payload;
//       })
//       .addCase(getArticles.rejected, (_, { payload }) => console.log(payload));
//   },
//   reducers: {
//     togglePage(state, { payload }) {
//       state.page = payload === 1 ? 2 : 1;
//     },
//   },
// });

// export const { togglePage } = articlesSlice.actions;
// export const articlesReducer = articlesSlice.reducer;
