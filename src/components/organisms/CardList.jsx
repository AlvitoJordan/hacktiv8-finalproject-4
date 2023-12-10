import React from "react";
import { MovieCard } from "../molecules";

const CardList = ({ movies }) => {
  return (
    <div className="flex-1 max-w-full mx-auto items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-10">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.Title}
            poster={movie.Poster}
            release={movie.Year}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
