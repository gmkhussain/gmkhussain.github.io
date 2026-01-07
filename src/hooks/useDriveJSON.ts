// src/hooks/useContent.ts
import { useState, useEffect } from "react";


export function useDriveJSON() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const VITE_STAGE = import.meta.env.VITE_STAGE === "true";

  useEffect(() => {
    const localURL = "http://localhost:8080/content/en.json";
    const driveFileId = "1uM4QHpSuCrimWaIdA4BuLu-VwYmflA5T";
    const driveURL = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

    const url = VITE_STAGE ? localURL : localURL;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch JSON: ${res.status}`);
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
