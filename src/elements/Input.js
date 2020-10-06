import React from "react";

const Input = (props) => {
  if (props.type !== "textarea") {
    return (
      <input
        type={props.type}
        name={props.name}
        className={[
          props.type === "file" ? "form-control-file" : "form-control",
          props.className,
        ].join(" ")}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    );
  }

  return (
    <textarea
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className={["form-control", props.className].join(" ")}
      rows="5"
    ></textarea>
  );
};

export default Input;
