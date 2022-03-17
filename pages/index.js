import { useState, useEffect } from "react/cjs/react.development";
import Seo from "../components/Seo";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Moive from "../components/Movie";

export default function Home() {
  const [movies, setMovies] = useState();
  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title: title,
        },
      },
      `/movies/${id}`
    );
  };
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div className="container">
      <Seo title={"Home"} />
      <Moive movies={movies}/>
    </div>
  );
}
