import React from "react";
import { Route, Routes } from "react-router-dom";
import Detailpage from "./pages/Detailpage";
import { NavBar } from "./components/organisms";
import { Footer } from "./components/molecules";
import Header from "./requirement/Header";
import { Gap } from "./components/atoms";
import Movie from "./requirement/Movie";
import Search from "./requirement/Search";
import { FetchSearch } from "./services";
import { DropdownHooks, SearchingHooks } from "./hooks";

function App() {
  const { searchValue, setSearchValue } = SearchingHooks("");

  const { selected, setSelected } = DropdownHooks();

  console.log("SearchValue After Change : ", searchValue);
  console.log("Type After Change : ", selected);
  let movies, error;

  if (selected === "All" && searchValue === "") {
    ({ movies, error } = FetchSearch());
  } else {
    ({ movies, error } = FetchSearch(
      searchValue || undefined,
      selected === "All" ? undefined : selected
    ));
  }

  const handleSearch = (searchValue, type) => {
    setSearchValue(searchValue);
    setSelected(type);
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
