import React from "react";

const SmallImage = (props) => {
  const { title, source } = props;
  const imageSource = source ? source : "https://via.placeholder.com/70x100";
  return (
    <img
      src={imageSource}
      alt={title}
      className="w-[70px] min-h-[100px] object-cover"
    />
  );
};

export default SmallImage;
