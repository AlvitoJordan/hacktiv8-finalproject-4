import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/templates/Layout";
import { HeaderOne } from "../components/atoms";

const Detailpage = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=aae043f2`
        );
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <Layout>
      <div className="w-full">
        <div className="flex rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={movieData?.Poster}
            alt={movieData?.Title}
          />
          <div className="px-6">
            <HeaderOne text={movieData?.Title} />
            <p className="dark:text-gray-300">
              Home &gt; {movieData?.Type} &gt; {movieData?.Title}
            </p>
            <div className="flex flex-row gap-2">
              <div className="flex flex-col w-32 gap-2 items-center justify-center p-2 rounded-md border-darkRed bg-transparent border-2 text-yellow-500">
                <p className="bg-red w-full justify-center flex rounded-sm">
                  Score
                </p>
                <p className="font-black text-3xl">
                  {parseFloat(movieData?.imdbRating).toFixed(1)}
                </p>
                <p className="text-xs">{movieData?.imdbVotes} Votes</p>
              </div>
              <div className="flex w-32 gap-2 items-center justify-center p-2 rounded-md border-darkRed bg-transparent border-2 text-gray-500">
                <p className="font-black text-3xl">{movieData?.Runtime}</p>
              </div>
            </div>

            <p className="text-gray-700 text-base">
              Year: {movieData?.Released}
            </p>
            <p className="text-gray-700 text-base">Genre: {movieData?.Genre}</p>
            <p className="text-gray-700 text-base mt-4">{movieData?.Plot}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detailpage;
