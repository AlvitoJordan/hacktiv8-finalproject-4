import Layout from "../components/templates/Layout";
import { MainHome } from "../components/organisms";
import { FetchSearch } from "../services";
import { useSearch } from "../hooks/searchContext";
import { LoadingState } from "../components/atoms";

const Homepage = () => {
  const { searchValue, selected } = useSearch();

  let movies, error, isLoading;

  if (selected === "All" && searchValue === "") {
    ({ movies, error, isLoading } = FetchSearch());
    console.log("Kondisi 1");
  } else {
    ({ movies, error, isLoading } = FetchSearch(
      searchValue || undefined,
      selected === "All" ? undefined : selected
    ));
    console.log("Kondisi 2");
  }

  return (
    <Layout>
      {isLoading ? (
        <LoadingState />
      ) : (
        <MainHome error={error} movies={movies} />
      )}
    </Layout>
  );
};

export default Homepage;
