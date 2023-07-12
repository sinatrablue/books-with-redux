type InputBookProps = {
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

type BookProps = {
  isbn: number;
  title: string;
  author: string;
};

type BookAction = {
  type: string;
  payload: BookProps;
};

type BookState = {
  books: BookProps[];
  selectedBook: BookProps;
};

type DispatchType = (args: BookAction) => BookAction;
