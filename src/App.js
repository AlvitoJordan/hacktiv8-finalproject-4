import React from "react";
import Layout from "./components/templates/Layout";
import { HeaderOne } from "./components/atoms";
import { CardList } from "./components/organisms";

function App() {
  const movies = [
    {
      title: "Film 1",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      release: "2022-01-01",
      rating: 8.5,
      age: "PG-13",
      type: "Action",
    },
    {
      title: "Film 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      release: "2022-02-02",
      rating: 7.8,
      age: "PG",
      type: "Comedy",
    },
    {
      title: "Film 3",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      release: "2022-02-02",
      rating: 7.8,
      age: "PG",
      type: "Comedy",
    },
    {
      title: "Film 4",
      release: "2022-02-02",
      rating: 7.8,
      age: "PG",
      type: "Comedy",
    },
    {
      title: "Film 5",
      release: "2022-02-02",
      rating: 7.8,
      age: "PG",
      type: "Comedy",
    },
  ];
  return (
    <Layout>
      <HeaderOne text="Movie List" />
      <div className="pb-5"></div>
      <CardList movies={movies} />
    </Layout>
  );
}

export default App;
