import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

async function getAllArticles(page, thunkAPI) {
  try {
    const res = await axios.get("http://127.0.0.1:8000/posts/", {
      params: { page: page },
    });
    if (res.data.error) {
      return thunkAPI.rejectWithValue(res.data.error);
    }
    return res.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}
export const getArticles = createAsyncThunk(
  "articles/getArticles",
  getAllArticles
);
