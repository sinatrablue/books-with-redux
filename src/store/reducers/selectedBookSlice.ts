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
    setCurrentBook: (state, action: PayloadAction<BookProps>) => {
      return action.payload;
    },
  },
});

export const { setCurrentBook } = currentBookSlice.actions;
export const selectCurrentBook = (state: RootState) => state.selectedBook;
export default currentBookSlice.reducer;
