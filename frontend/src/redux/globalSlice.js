import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "ua",
  error: null,
  pending: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLanguage(state, { payload }) {
      state.lang = payload;
      // console.log(payload);
    },
    setError(state, { payload }) {
      state.error = payload;
      // console.log(payload);
    },
    setPending(state, { payload }) {
      state.pending = payload;
      // console.log(payload);
    },
  },
});

export const { setLanguage, setError, setPending } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
