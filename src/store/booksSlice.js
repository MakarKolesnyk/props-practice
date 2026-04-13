import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBooks } from "../api";

export const getAllBooksAsync = createAsyncThunk(
  "books/getAllBooksAsync",
  async (params, thunkAPI) => {
    try {
      const response = await getAllBooks(params);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    error: null,
    isPending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooksAsync.pending, (state) => {
      state.isPending = true;
      state.error = null;
    });
    builder.addCase(getAllBooksAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.error = null;
      state.books = action.payload;
    });
    builder.addCase(getAllBooksAsync.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.payload;
    });
  },
});

export default booksSlice.reducer;
