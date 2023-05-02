import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "ua",
};

const langSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setLanguage(state, { payload }) {
      state.lang = payload;
      console.log(state.lang);
    },
  },
});

export const { setLanguage } = langSlice.actions;
export const langReducer = langSlice.reducer;
