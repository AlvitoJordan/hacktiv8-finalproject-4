import React from "react";
import { Gap } from "../atoms";
import Header from "../../requirement/Header";
import Movie from "../../requirement/Movie";

const MainHome = ({ movies, error }) => {
  return (
    <>
      <Header text="Movie List" />
      <Gap size="h-4" />
      {error ? <div>Error: {error}</div> : <Movie movies={movies} />}
    </>
  );
};

export default MainHome;
