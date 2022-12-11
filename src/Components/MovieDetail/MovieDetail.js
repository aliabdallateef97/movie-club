import { useState, useEffect ,useContext } from "react";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import classes from "./MovieDetail.module.css";
import themeContext from "../../store/theme-context";
import Cast from "./Cast/Cast";
import Trailer from "./Trailer/Trailer";
import Lists from "../Lists/Lists";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const ctx=useContext(themeContext)
  const { id } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        ctx.tv ?
        `https://api.themoviedb.org/3/tv/${id}?api_key=3e21184f03d65304d7cd0f6382c5f7e0` :
        `https://api.themoviedb.org/3/movie/${id}?api_key=3e21184f03d65304d7cd0f6382c5f7e0`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id ,ctx.tv]);

  return (
    <Layout>
      <div>
        <div
          className={classes.banner}
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className={classes.fade} />
        </div>
      </div>
      <div className={`${classes.details} ${ctx.light ? classes.light : ''}`}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={movie?.title || movie.name}
          />
        <div className={classes.informations}>
          <h1>{ctx.tv? movie.name: movie.title }</h1>
          <p>{`${ctx.tv? movie.last_air_date : movie.release_date}`}</p>
          <h3>{movie?.overview}</h3>
        </div>
      </div>
      <Cast id={id}/>
      <Trailer id={id} />
      {ctx.tv? 
      <Lists url={`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=3e21184f03d65304d7cd0f6382c5f7e0&page=1`} title="Recommendation" /> :
      <Lists url={`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=3e21184f03d65304d7cd0f6382c5f7e0&page=1`} title="Recommendation" />}
    </Layout>
  );
};

export default MovieDetail;
