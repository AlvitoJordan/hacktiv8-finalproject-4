import { useEffect, useState } from "react";

const FetchByID = (id) => {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      setTimeout(async () => {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=aae043f2&plot=full`
        );
        const data = await response.json();
        setMovieData(data);
        setIsLoading(false);
      }, 2000);
    };
    fetchMovie();
  }, [id]);
  return { movieData, isLoading };
};

export default FetchByID;
