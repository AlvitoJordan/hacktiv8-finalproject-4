import React from "react";

const Title = (props) => {
  const { title } = props;
  return <p className="font-bold text-md line-clamp-2">{title}</p>;
};

export default Title;
