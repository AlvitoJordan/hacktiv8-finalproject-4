import React from "react";
import { Gap, HeaderOne } from "../atoms";
import { CardList } from "../organisms";

const MainHome = ({ movies, error }) => {
  return (
    <>
      <HeaderOne text="Movie List" />
      <Gap size="h-4" />
      {error ? <div>Error: {error}</div> : <CardList movies={movies} />}
    </>
  );
};

export default MainHome;
