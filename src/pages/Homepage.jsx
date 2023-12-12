import Layout from "../components/templates/Layout";
import { MainHome } from "../components/organisms";
import { FetchAPI } from "../services";

const Homepage = () => {
  const { movies, error } = FetchAPI();

  return (
    <Layout>
      <MainHome error={error} movies={movies} />
    </Layout>
  );
};

export default Homepage;
