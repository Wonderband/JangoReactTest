import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const axIstance = axios.create({
  baseURL: "http://127.0.0.1:8000/posts/",
});

async function getAllArticles(page, thunkAPI) {
  try {
    const res = await axIstance.get("", {
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

export async function getArticleById(artId) {
  try {
    const res = await axIstance.get(`${artId}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
}

export const getArticles = createAsyncThunk(
  "articles/getArticles",
  getAllArticles
);

export const getArticle = createAsyncThunk(
  "articles/getArticle",
  getArticleById
);
