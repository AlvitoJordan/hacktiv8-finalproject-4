import React from "react";

const CardImage = (props) => {
  const { title, source } = props;
  const imageSource = source ? source : "https://via.placeholder.com/300x445";
  return (
    <img
      className="w-full h-full transition-transform group-hover:scale-105 duration-200"
      src={imageSource}
      alt={title}
    />
  );
};

export default CardImage;
