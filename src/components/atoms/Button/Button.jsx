import React from "react";

const Button = (props) => {
  const { text } = props;
  return (
    <button
      className="bg-red border-red hover:bg-rose-500  border-2 text-md text-white rounded-lg p-2"
      type="submit"
    >
      {text}
    </button>
  );
};

export default Button;
