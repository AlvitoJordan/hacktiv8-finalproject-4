import React from "react";

const BackgroundText = (props) => {
  const { text } = props;
  return (
    <div className="font-light text-white text-xs rounded-sm bg-red px-2 py-1">
      {text}
    </div>
  );
};

export default BackgroundText;
