import React from "react";
import { FaStar } from "react-icons/fa";

const CardRating = (props) => {
  const { rating } = props;
  return (
    <div className="font-semibold text-sm text-yellow-500 flex flex-row gap-2 items-center">
      <FaStar size="13px" />
      {rating}
    </div>
  );
};

export default CardRating;
