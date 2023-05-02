import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const axIstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

async function getAllArticles(page, thunkAPI) {
  try {
    const res = await axIstance.get("posts", {
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
    const res = await axIstance.get(`posts/${artId}`);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getMainInfo() {
  try {
    const res = await axIstance.get("");
    console.log(res);
    return res.statusText;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getAboutInfo() {
  try {
    const res = await axIstance.get("about");
    return res.statusText;
  } catch (error) {
    throw new Error(error.message);
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
