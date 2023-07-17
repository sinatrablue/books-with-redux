import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DefaultBooks } from "../../data/BooksListData";
import { RootState } from "../store";

const initialState: BookProps[] = DefaultBooks;

export const booksSlice = createSlice({
  name: "booksSlice",
  initialState: initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<BookProps[]>) => {
      return action.payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;
export const selectBooks = (state: RootState) => state.books;
export default booksSlice.reducer;
