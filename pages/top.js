import { useState, useEffect } from "react/cjs/react.development";
import Moive from "../components/Movie";
import Seo from "../components/Seo";

export default function Top() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title={"Top"} />
      <Moive movies={movies} />
    </div>
  );
}
