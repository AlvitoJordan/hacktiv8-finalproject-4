import React from "react";
import { MovieCard } from "../molecules";

const CardList = ({ movies }) => {
  return (
    <div className="flex-1 max-w-full mx-auto items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 grow place-items-center">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            poster={movie.poster}
            release={movie.release}
            rating={movie.rating}
            age={movie.age}
            type={movie.type}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
