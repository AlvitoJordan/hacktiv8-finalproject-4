import { useEffect, useReducer, useState } from "react";

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

const FetchSearch = (searchQuery = "man", type = "") => {
  const [search, setSearch] = useState(null);

  const [state, dispatch] = useReducer(movieReducer, {
    movies: [],
    error: null,
  });
  const { movies, error } = state;

  useEffect(() => {
    async function getAPI() {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=${searchQuery}&type=${type}&apikey=aae043f2`
        );
        const moviesData = await response.json();
        if (moviesData.Search) {
          setSearch(moviesData.Search);
          dispatch({ type: "SET_MOVIES", payload: moviesData.Search });
        } else {
          dispatch({ type: "SET_ERROR", payload: "Not Found" });
        }
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    }
    getAPI();
  }, [searchQuery, type]);

  return { movies: search || movies, error };
};

export default FetchSearch;
