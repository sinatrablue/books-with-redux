export const addBook = (book: BookProps): BookAction => {
  return {
    type: "ADD_BOOK",
    payload: book,
  };
};

export const deleteBook = (book: BookProps): BookAction => {
  return {
    type: "DELETE_BOOK",
    payload: book,
  };
};

export const editBook = (book: BookProps): BookAction => {
  return {
    type: "EDIT_BOOK",
    payload: book,
  };
};
