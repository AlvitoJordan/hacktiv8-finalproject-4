import React, { useEffect, useReducer } from "react";
import Layout from "../components/templates/Layout";
import { MainHome } from "../components/organisms";

const movieReducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
const Homepage = () => {
  const [state, dispatch] = useReducer(movieReducer, {
    movies: [],
    error: null,
  });

  const { movies, error } = state;
  useEffect(() => {
    async function getAPI() {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=man&apikey=aae043f2`
        );
        const moviesData = await response.json();
        dispatch({ type: "SET_MOVIES", payload: moviesData.Search });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    }
    getAPI();
  }, []);

  return (
    <Layout>
      <MainHome error={error} movies={movies} />
    </Layout>
  );
};

export default Homepage;
