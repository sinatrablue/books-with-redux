import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: BookProps = {
  isbn: 0,
  author: "",
  title: "",
};

export const currentBookSlice = createSlice({
  name: "currentBookSlice",
  initialState: initialState,
  reducers: {
    setcurrentBook: (state, action: PayloadAction<BookProps>) => {
      state.author = action.payload.author;
      state.isbn = action.payload.isbn;
      state.title = action.payload.title;
    },
  },
});

export const { setcurrentBook } = currentBookSlice.actions;
export const selectCurrentBook = (state: RootState) => state.selectedBook;
export default currentBookSlice.reducer;
