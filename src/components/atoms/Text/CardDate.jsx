import React from "react";

const CardDate = (props) => {
  const { release } = props;
  return <div className="font-semibold text-sm text-gray-500">{release}</div>;
};

export default CardDate;
