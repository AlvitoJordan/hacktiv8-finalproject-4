import React from "react";
import { CardImage, Gap } from "../atoms";
import { DetailHeader, SubnavButton } from "../molecules";
import { subNavMenu } from "../../utils";

const DetailContent = ({ movie }) => {
  return (
    <div className="flex gap-5 min-h-[550px]">
      <div className="flex w-[400px] h-min">
        <CardImage source={movie?.Poster} alt={movie?.Title} />
      </div>
      <div className="w-full px-5">
        <DetailHeader
          title={movie?.Title}
          year={movie?.Year}
          runtime={movie?.Runtime}
          rated={movie?.Rated}
          type={movie?.Type}
          rating={movie?.imdbRating}
        />
        <Gap size={12} />
        <SubnavButton subNav={subNavMenu} movie={movie} />
      </div>
    </div>
  );
};

export default DetailContent;
