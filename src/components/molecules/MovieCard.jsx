import React from "react";
import {
  BackgroundText,
  CardDate,
  CardImage,
  CardRating,
  CardTitle,
} from "../atoms";

const MovieCard = (props) => {
  const { title, poster, release, rating, age, type } = props;

  return (
    <div className="relative max-w-xs rounded-xl overflow-hidden shadow-lg group w-[300px] h-[445px] cursor-pointer">
      <CardImage source={poster} title={title} />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="w-full">
          <CardTitle title={title} />
          <CardDate release={release} />
          <CardRating rating={rating} />
        </div>
        <div className="absolute flex gap-2 bottom-4 right-4">
          <BackgroundText text={age} />
          <BackgroundText text={type} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
