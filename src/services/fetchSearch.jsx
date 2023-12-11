import { useEffect, useState } from "react";

const FetchSearch = (searchQuery) => {
  const [search, setSearch] = useState(null);

  useEffect(() => {
    if (searchQuery !== "") {
      fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=aae043f2`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Search) {
            setSearch(data.Search);
          }
        })
        .catch(() => {
          console.error("FetchSearch Error");
        });
    }
  }, [searchQuery]);

  return search;
};

export default FetchSearch;
