import React from "react";
import { MovieCard } from "../molecules";

const CardList = ({ movies }) => {
  return (
    <div className="flex max-w-full mx-auto items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-10">
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
