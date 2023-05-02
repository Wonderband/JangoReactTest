import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "ua",
  error: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLanguage(state, { payload }) {
      state.lang = payload;
      console.log(state.lang);
    },
    setGlobalError(state, { payload }) {
      state.error = payload;
      console.log(state.error);
    },
  },
});

export const { setLanguage, setGlobalError } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
