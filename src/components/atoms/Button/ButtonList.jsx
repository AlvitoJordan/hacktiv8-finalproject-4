import React from "react";
import SmallImage from "../Image/SmallImage";
import Title from "../Text/Title";
import SmallText from "../Text/SmallText";
import { SearchingHooks } from "../../../hooks";

const ButtonList = ({ movie }) => {
  const { handleClick } = SearchingHooks();

  return (
    <div className="absolute lg:left-64 top-14 z-10 mt-2 rounded-lg bg-white dark:bg-darkRed shadow-lg focus:outline-none overflow-hidden">
      <div>
        {movie
          ? movie.slice(0, 5).map((movies) => (
              <div
                key={movies?.imdbID}
                className="cursor-pointer p-2 flex gap-3 items-start w-[305px] lg:w-[370px] py-2 text-gray-500 dark:text-gray-200 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900"
                onClick={() => handleClick(movies?.imdbID)}
              >
                <SmallImage source={movies?.Poster} alt={movies?.Title} />

                <div>
                  <Title title={movies?.Title} />
                  <SmallText text={movies?.Year} />
                  <SmallText text={movies?.Type} />
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ButtonList;
