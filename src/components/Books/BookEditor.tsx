import { useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function BookEditor() {
  const [input, setInput] = useState<BookProps>({
    isbn: 0,
    title: "",
    author: "",
  });

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
        <Button
          onClick={() => console.log("Add this book!")}
          title="Update This Book"
        />
      </div>
    </>
  );
}
