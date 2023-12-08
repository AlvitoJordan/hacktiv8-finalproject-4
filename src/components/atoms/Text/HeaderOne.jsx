import React from "react";

const HeaderOne = (props) => {
  const { text } = props;
  return <h1 className="text-red font-bold text-3xl">{text}</h1>;
};

export default HeaderOne;
