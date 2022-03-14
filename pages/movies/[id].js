import { useRouter } from "next/router";
import { useState, useEffect } from "react/cjs/react.development";
import Seo from "../../components/Seo";

export default function Detail() {
  const router = useRouter();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      const result = await (
        await fetch(`/api/movies/${router.query.id}`)
      ).json();
      setMovie(result);
    })();
  }, [router]);
  return (
    <div>
      <Seo title={router.query.title} />

      <div className="detail_bg">
        <div className="detail_ct">
          <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          </div>
          <div className="detail_ct_wrapper">
            <h1>{router.query.title || "Loding"}({movie.release_date?.slice(0,4)})</h1>
            <p>{movie.vote_average}</p>
            {movie.genres?.map((genre, index) =>(
                <li key={index}>{genre.name}</li>
            ))}
            {movie.runtime}분
            <p>개요</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>

      <div>힝9힝9</div>

      <style>{`
        .detail_bg {
          background-image: linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) 120px, rgba(31.5, 10.5, 10.5, 0.84) 40%),
          url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path});
          background-size: 100% 100%;
          color:white;
          display:flex;
        }
        
        .detail_ct{
          max-width: 1400px;
          padding: 30px 0px 30px 0px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          maring-right:30px;
        }

        .detail_ct img{
          border-radius: 14px;
          margin-right:30px;
        }
        .detail_ct_wrapper{
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
