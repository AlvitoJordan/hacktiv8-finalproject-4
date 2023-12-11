import React from "react";

const ListText = ({ movie }) => {
  return (
    <div className="flex w-full">
      <div className="grid grid-cols-[0.3fr_0.1fr_1fr] gap-2">
        <p>Genre</p>
        <p>:</p>
        <p>{movie?.Genre}</p>
        <p>Actors</p>
        <p>:</p>
        <p>{movie?.Actors}</p>
        <p>Director</p>
        <p>:</p>
        <p>{movie?.Director}</p>
        <p>Writer</p>
        <p>:</p>
        <p>{movie?.Writer}</p>
        <p>Released</p>
        <p>:</p>
        <p>{movie?.Released}</p>
        <p>Language</p>
        <p>:</p>
        <p>{movie?.Language}</p>
        <p>Country</p>
        <p>:</p>
        <p>{movie?.Country}</p>
        <p>Awards</p>
        <p>:</p>
        <p>{movie?.Awards}</p>
      </div>
    </div>
  );
};

export default ListText;
