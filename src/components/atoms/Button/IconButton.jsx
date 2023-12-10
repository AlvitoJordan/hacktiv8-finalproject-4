import React from "react";

const IconButton = (props) => {
  const { type, onClick, children } = props;
  switch (type) {
    case "light":
      return (
        <button
          className="text-gray-200 hover:bg-rose-950 p-2 rounded-md"
          onClick={onClick}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          className="text-gray-500 hover:bg-gray-200 p-2 rounded-md"
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};

export default IconButton;
