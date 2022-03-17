import { useRouter } from "next/router";
import { useState, useEffect } from "react/cjs/react.development";
import Seo from "../../components/Seo";

export default function Detail() {
  const router = useRouter();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});

  useEffect(() => {
    (async () => {
      const resultCredit = await (
        await fetch(`/api/movies/credits/${router.query.id}`)
      ).json();
      setCredits(resultCredit);
    })();
  }, [router.query.id]);

  useEffect(() => {
    (async () => {
      const result = await (
        await fetch(`/api/movies/${router.query.id}`)
      ).json();

      setMovie(result);
    })();
  }, [router.query.id]);

  return (
    <div>
      <Seo title={router.query.title} />

      <div className="detail_bg">
        <div className="detail_ct">
          <div>
            <img src={`/api/movies/image/${movie.poster_path}`} />
          </div>
          <div className="detail_ct_wrapper">
            <h1>
              {movie.title}({movie.release_date?.slice(0, 4)})
            </h1>

            <div>
              <span>개봉 {movie.release_date} </span>
              <span>장르:</span>
              {movie.genres?.map((genre, index) => (
                <span key={index}>{genre.name} </span>
              ))}
              <span>시간: {movie.runtime}분</span>
            </div>
            <span>사용자 점수: {movie.vote_average}</span>
            <h3>{movie.tagline}</h3>
            <div>
              <p>개요</p>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cast_container">
        <h3>출연진</h3>
        <div className="cast_container_wrap">
          <ul className="scroll">
            {credits.cast?.map((people, index) => (
              <li className="cast_card" key={index}>
                <img
                  className="cast_img"
                  src={`https://image.tmdb.org/t/p/w500${people.profile_path}`}
                ></img>
                <p className="name">{people.name}</p>
                <p className="character">{people.character}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>sdsdsds</div>

      <style>{`
        .detail_bg {
          background-image: linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) 120px, rgba(31.5, 10.5, 10.5, 0.84) 40%),
          url(/api/movies/image/${movie.backdrop_path});
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
        .detail_ct_wrapper ul{
          display:flex;
        }
        .cast_container{
          max-width: 1400px;
          margin: 0 auto;
        }
        .cast_container_wrap{
          width: 100%;
          white-space: nowrap;
          overflow-x: scroll;
          overflow-y: hidden;
        }
        .cast_card{
          height: 270px;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          margin: 10px 10px 10px 4px;
        }
        .cast_container ul {
          list-style:none;
        }
        .cast_container_wrap::-webkit-scrollbar {
          width:1px;
        }
        .cast_container_wrap::-webkit-scrollbar-thumb {
          background-color:#424342; /*스크롤바의 색상*/
          border-radius: 10px;
          background-clip: padding-box;
          border: 4px solid transparent;
        }
        .cast_container_wrap::-webkit-scrollbar-track {
          background:rgba(0,0,0,0.1);
          
        }
        .cast_container li {
          display:inline-block
        }
        .cast_img{
          min-width: 138px;
          width: 138px;
          height: 175px;
          display: block;
          border-top-right-radius:12px;
          border-top-left-radius:12px;  
        }
        .name{
          padding-left:10px;
          min-width: 138px;
          width: 138px;
          font-weight: bold;
          overflow: hidden;
          color: #000;
        }
        .character{
          padding-left:10px;
          width: 138px;
          margin-top: -15px;
          font-size: 0.9em;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
}
