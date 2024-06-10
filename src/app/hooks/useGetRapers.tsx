"use client";

import { useEffect, useState } from "react";

interface RapersProps {
  name: string;
  country: string;
  image: string;
}

export default function useGetRapers() {
  const [rapers, setRapers] = useState<RapersProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setRapers(data.results))
      .finally(() => setLoading(false));
  }, []);

  return { rapers, loading };
}
