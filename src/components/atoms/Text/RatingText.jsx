import React from "react";
import { FaStar } from "react-icons/fa";

const RatingText = (props) => {
  const { rating } = props;
  return (
    <div className="text-yellow-500 flex items-center gap-2">
      <FaStar size={19} />
      <p className="font-black text-2xl">{parseFloat(rating).toFixed(1)}</p>
    </div>
  );
};

export default RatingText;
