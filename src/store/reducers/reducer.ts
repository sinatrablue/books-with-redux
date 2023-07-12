import { DefaultBooks } from "../../data/BooksListData";
import { actionsTypes } from "../actions/actionsTypes";

const initialState: BookState = {
  books: DefaultBooks,
  selectedBook: DefaultBooks[0],
};

const reducer = (
  state: BookState = initialState,
  action: BookAction
): BookState => {
  switch (action.type) {
    case actionsTypes.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case actionsTypes.DELETE_BOOK:
      const updatedBooks = state.books.filter(
        book => book.isbn !== action.payload.isbn
      );
      return {
        ...state,
        books: updatedBooks,
      };
    case actionsTypes.EDIT_BOOK:
      const updatedBook = action.payload;
      const updatedBooksList = state.books.map(book => {
        if (book.isbn === updatedBook.isbn) {
          return updatedBook;
        }
        return book;
      });
      return {
        ...state,
        books: updatedBooksList,
      };
    case actionsTypes.SELECT_BOOK:
      return {
        ...state,
        selectedBook: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
