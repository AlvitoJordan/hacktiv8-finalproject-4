import React from "react";

const SmallText = (props) => {
  const { text } = props;
  return <p className="font-thin text-sm">{text}</p>;
};

export default SmallText;
