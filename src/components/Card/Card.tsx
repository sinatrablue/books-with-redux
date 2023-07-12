import { Link } from "react-router-dom";
import "./Card.css";

export default function Card(props: BookProps) {
  return (
    <div className="my-card">
      <div className="my-card-details">
        <p className="text-title">{props.title}</p>
        <p className="my-card-text-body">Written by {props.author}</p>
      </div>
      <Link to="edit">
        <button className="my-card-button">N° {props.isbn}</button>
      </Link>
    </div>
  );
}
