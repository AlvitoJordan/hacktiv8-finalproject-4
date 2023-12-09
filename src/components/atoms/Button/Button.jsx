import React from "react";

const Button = (props) => {
  const { onClick, text } = props;
  return (
    <button
      className="bg-red border-red border-2 text-md text-white rounded-lg p-2"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
