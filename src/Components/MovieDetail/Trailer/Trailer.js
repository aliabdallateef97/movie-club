import { useState, useEffect, useContext } from "react";
import classes from "./Trailer.module.css";
import YouTube from "react-youtube";
import themeContext from "../../../store/theme-context";

const Trailer = (props) => {
  const [movie, setMovie] = useState();
  const ctx = useContext(themeContext);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        ctx.tv
          ? `https://api.themoviedb.org/3/tv/${props.id}?api_key=3e21184f03d65304d7cd0f6382c5f7e0&append_to_response=videos`
          : `https://api.themoviedb.org/3/movie/${props.id}?api_key=3e21184f03d65304d7cd0f6382c5f7e0&append_to_response=videos`
      );
      const data = await response.json();
      setMovie(data.videos.results);
    };
    fetchMovie();
  }, [props.id,ctx.tv]);

  const renderTrailer = () => {
    let trailer = movie.find((mov) => mov.name === "Official Trailer");
    if (trailer === undefined) {
      trailer = movie[0];
    }
    return (
      <YouTube
        videoId={trailer ? trailer.key : ''}
        opts={{
          width: "100%",
          height: "500px",
        }}
      />
    );
  };

  return (
    <div className={`${classes.trailer} ${ctx.light ? classes.light : ""}`}>
      <h2>Official Trailer</h2>
      {movie ? renderTrailer() : null}
    </div>
  );
};

export default Trailer;
