import { Link } from "react-router-dom";
import "./Card.css";
import { useAppDispatch } from "../../store/typedHooks";
import { setCurrentBook } from "../../store/reducers/selectedBookSlice";

export default function Card(props: BookProps) {
  const dispatch = useAppDispatch();
  const updateCurrentBook = () => {
    dispatch(setCurrentBook(props));
  };

  return (
    <div className="my-card">
      <div className="my-card-details">
        <p className="text-title">{props.title}</p>
        <p className="my-card-text-body">Written by {props.author}</p>
      </div>
      <Link to="edit">
        <button className="my-card-button" onClick={updateCurrentBook}>
          N° {props.isbn}
        </button>
      </Link>
    </div>
  );
}
