import "./Button.css";

export type ButtonProps = {
  title: string;
  onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button className="button" onClick={props.onClick}>
      <span className="button-content">{props.title} </span>
    </button>
  );
}
