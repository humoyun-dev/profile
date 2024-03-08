import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import fetcher from "@/lib/fetcher";

interface FileProps {
  id: number;
  file: string;
}

const DownloadButton = () => {
  const [files, setFiles] = useState<FileProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetcher<FileProps[]>("cvs");

        setFiles(data.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <a href={files[0].file}>
          <Button className="mt-8 text-xl">Download Latest CV</Button>
        </a>
      )}
    </div>
  );
};

export default DownloadButton;
