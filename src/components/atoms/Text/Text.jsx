import React from "react";

const Text = (props) => {
  const { text } = props;
  return <p className="text-black dark:text-white">{text}</p>;
};

export default Text;
