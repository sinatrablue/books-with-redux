import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { DefaultBooks } from "../../data/BooksListData";
import Button from "../Button/Button";

export default function BooksList() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3 py-5">
      <div className="d-flex justify-content-between w-100 mb-5">
        <h1>Books List</h1>
        <Link to="/add">
          <Button title="Add One Book" />
        </Link>
      </div>

      <Row md={3} xs={2} lg={4} className="g-5">
        {DefaultBooks.map(book => (
          <div key={book.isbn}>
            <Card isbn={book.isbn} title={book.title} author={book.author} />
          </div>
        ))}
      </Row>
    </div>
  );
}
