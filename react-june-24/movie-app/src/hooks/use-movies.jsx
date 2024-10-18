import { useEffect, useState } from "react";

import { moveAPIInstance } from "../api";

const useMovies = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    moveAPIInstance
      .get(`/discover/movie?page=${page}`)
      .then((response) =>
        setResults((prev) => [...prev, ...response.data.results])
      )
      .finally(() => setLoading(false));
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  return { loading, results, page, nextPage };
};

export default useMovies;
