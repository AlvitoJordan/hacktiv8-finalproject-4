import React from "react";

const DetailTitle = (props) => {
  const { text } = props;
  return <h1 className="text-red font-black text-4xl">{text}</h1>;
};

export default DetailTitle;
