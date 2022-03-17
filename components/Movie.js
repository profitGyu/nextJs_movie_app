import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Moive({ movies }) {
  const router = useRouter();
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
  return (
    <div className="container">
      {!movies && <h4>Loading ...</h4>}
      {movies?.map((movie) => (
        <div
          className="movie"
          onClick={() => onClick(movie.id, movie.original_title)}
          key={movie.id}
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Movie"
            className="movie_img"
            width={213}
            height={320}
          />
          <h4>
            <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.id}`}
            >
              {movie.title}
            </Link>
          </h4>
          <p>{movie.release_date}</p>
        </div>
      ))}
      <style jsx>{`
        .container {
          max-width: 520px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }

        .movie_img {
          max-width: 100%;
          max-height: 320px;
          border-radius: 18px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          cursor: pointer;
        }
        .movie:hover {
          transform: scale(1.05) translateY(-10px);
        }

        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
        .movie p {
          font-size: 1em;
          text-align: center;
          color: rgba(0, 0, 0, 0.6);
          maring: 0px;
          padding: 0px;
        }
      `}</style>
    </div>
  );
}
