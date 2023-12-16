import React from "react";
import { Route, Routes } from "react-router-dom";
import Detailpage from "./pages/Detailpage";
import { NavBar } from "./components/organisms";
import { Footer } from "./components/molecules";
import Header from "./requirement/Header";
import { Gap } from "./components/atoms";
import Movie from "./requirement/Movie";
import Search from "./requirement/Search";
import { FetchAPI } from "./services";
import SearchPage from "./pages/SearchPage";
function App() {
  const { movies, error } = FetchAPI();
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
