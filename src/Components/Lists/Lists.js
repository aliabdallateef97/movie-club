import { useState, useEffect,useContext } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import classes from './Lists.module.css'
import themeContext from "../../store/theme-context";
import {Link} from 'react-router-dom'

const Lists = (props) => {
  const [movies, setMovies] = useState([]);
  const ctx=useContext(themeContext)

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(props.url);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, [props.url]);
  
  const classLists=[`${classes.lists} ${ctx.light === true ? classes.light :''}`]


  return (
    <div className={classLists} >
      <h1>{props.title}</h1>
      <Splide options={{
            fixedWidth:"140px",
            arrows:false,
            pagination:false,
            drag:"free"}}>
        {movies.map((movie) => {
          return (
            <SplideSlide className={classes.list} key={movie.id}>
              <Link to={`/movie-detail/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.name}
              />
              <div className={classes.rate}>{movie.vote_average.toFixed(1)}</div>
              <p>{movie.title || movie.name}</p>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Lists;
