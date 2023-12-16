import Layout from "../components/templates/Layout";
import { MainHome } from "../components/organisms";
import { FetchSearch } from "../services";
import { useLocation } from "react-router-dom";
import { DropdownHooks, SearchingHooks } from "../hooks";
import { useEffect } from "react";

const Homepage = () => {
  const { searchValue, setSearchValue } = SearchingHooks("");
  const { selected, setSelected } = DropdownHooks();

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { searchValue: stateSearchValue, selected: stateSelected } =
        location.state;
      setSearchValue(stateSearchValue);
      setSelected(stateSelected);
      window.history.replaceState(null, "");
    }
  }, [location.state, setSearchValue, setSelected]);

  let movies, error;

  if (selected === "All" && searchValue === "") {
    ({ movies, error } = FetchSearch());
  } else {
    ({ movies, error } = FetchSearch(
      searchValue || undefined,
      selected === "All" ? undefined : selected
    ));
  }

  return (
    <Layout>
      <MainHome error={error} movies={movies} />
    </Layout>
  );
};

export default Homepage;
