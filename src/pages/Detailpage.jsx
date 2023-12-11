import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/templates/Layout";
import { DetailContent } from "../components/organisms";

const Detailpage = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=aae043f2&plot=full`
        );
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <Layout>
      <DetailContent movie={movieData} />
    </Layout>
  );
};

export default Detailpage;
