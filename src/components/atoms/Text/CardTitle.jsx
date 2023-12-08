import React from "react";

const CardTitle = (props) => {
  const { title } = props;
  return (
    <div className="font-bold text-md text-white line-clamp-1">{title}</div>
  );
};

export default CardTitle;
