import React, { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Detailpage from "./pages/Detailpage";
import { NavBar } from "./components/organisms";
import { Footer } from "./components/molecules";
import Header from "./requirement/Header";
import { Gap } from "./components/atoms";
import Movie from "./requirement/Movie";
import Search from "./requirement/Search";
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
function App() {
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

  const handleSearch = (searchValue) => {
    console.log("Search Value:", searchValue);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className=" bg-white dark:bg-gradient-to-t dark:from-black dark:from-80%  dark:to-darkRed min-h-screen">
            <NavBar>
              <Search onSearch={handleSearch} />
            </NavBar>
            <main className="p-10 ">
              <Header text="Movie List" />
              <Gap size="h-4" />
              {error ? <div>Error: {error}</div> : <Movie movies={movies} />}
            </main>
            <Footer />
          </div>
        }
      />
      <Route path="/detail/:id" element={<Detailpage />} />
    </Routes>
  );
}

export default App;
