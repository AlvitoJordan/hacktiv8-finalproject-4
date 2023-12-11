import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/templates/Layout";
import { DetailContent } from "../components/organisms";
import { FetchByID } from "../services";
import { LoadingState } from "../components/atoms";

const Detailpage = () => {
  const { id } = useParams();
  const { movieData, isLoading } = FetchByID(id);

  return (
    <Layout>
      {isLoading ? <LoadingState /> : <DetailContent movie={movieData} />}
    </Layout>
  );
};

export default Detailpage;
