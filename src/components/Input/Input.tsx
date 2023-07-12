import "./Input.css";

export default function Input(props: InputBookProps) {
  return (
    <div className="textInputWrapper">
      <input
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type="text"
        className="textInput"
      />
    </div>
  );
}
