import React from "react";
import { BackgroundText, CardDate, CardImage, CardTitle } from "../atoms";

const MovieCard = (props) => {
  const { title, poster, release, type, onClick } = props;

  return (
    <div
      className="relative max-w-xs rounded-xl overflow-hidden shadow-lg group cursor-pointer"
      onClick={onClick}
    >
      <CardImage source={poster} title={title} />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="w-full">
          <CardTitle title={title} />
          <CardDate release={release} />
        </div>
        <div className="absolute items-end flex flex-col gap-2 top-4 right-4">
          <BackgroundText text={type} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
