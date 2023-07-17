import { useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { selectCurrentBook } from "../../store/reducers/selectedBookSlice";
import { useAppDispatch } from "../../store/typedHooks";
import { selectBooks, setBooks } from "../../store/reducers/booksSlice";

export default function BookEditor() {
  const currentBookToEdit = useSelector(selectCurrentBook);
  const [input, setInput] = useState<BookProps>(currentBookToEdit);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const books = useSelector(selectBooks);
  const updateBook = () => {
    console.log("updating book", input);
    dispatch(
      setBooks(
        books.map(book => {
          if (book.isbn !== input.isbn) return book;
          return input;
        })
      )
    );
    navigate("/");
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center gap-3 py-5">
        <h1 className="d-flex w-75 mb-5">
          <div className="d-flex me-4 fs-1">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <BsArrowLeftSquareFill />
            </Link>
          </div>
          Book Editor
        </h1>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center gap-3 mb-5">
        <div className="d-flex flex-column w-75 gap-3">
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            name="title"
            value={input.title}
            onChange={e => setInput({ ...input, title: e.target.value })}
            placeholder="Enter the title of the book"
          />
        </div>
        <div className="d-flex flex-column w-75 gap-3">
          <label htmlFor="author">Author</label>
          <Input
            id="author"
            name="author"
            value={input.author}
            onChange={e => setInput({ ...input, author: e.target.value })}
            placeholder="Enter the author of the book"
          />
        </div>
      </div>
      <div className="d-flex w-100 justify-content-center">
        <Button onClick={updateBook} title="Update This Book" />
      </div>
    </>
  );
}
