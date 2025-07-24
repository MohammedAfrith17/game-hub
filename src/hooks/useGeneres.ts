import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api.client";

interface Genere {
  id: number;
  name: string;
}

interface FetchGeneresRes {
  count: number;
  results: Genere[];
}

const useGeneres = () => {
  const [genres, setGenres] = useState<Genere[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setloading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setloading(true);
    apiClient
      .get<FetchGeneresRes>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setloading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGeneres;
