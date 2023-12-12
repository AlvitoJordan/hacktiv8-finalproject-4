import React from "react";
import { BackgroundText, DetailTitle, RatingText, SpanText } from "../atoms";

const DetailHeader = (props) => {
  const { title, year, runtime, rated, type, rating } = props;
  return (
    <div className="flex justify-between items-start ">
      <div className="flex flex-col gap-2">
        <DetailTitle text={title} />
        <div className="flex gap-3">
          <SpanText year={year} runtime={runtime} rated={rated} />
          <BackgroundText text={type} />
        </div>
      </div>
      <RatingText rating={rating} />
    </div>
  );
};

export default DetailHeader;
