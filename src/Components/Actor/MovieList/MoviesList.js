import classes from './MoviesList.module.css'
import {useState ,useEffect ,useContext} from 'react'
import themeContext from '../../../store/theme-context'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from 'react-router-dom';

const MoviesList = (props) => {
    const [movies ,setMovies] = useState([])
    const ctx =useContext(themeContext)

    useEffect(()=>{
        const fetchMovies =async()=>{
            const response = await fetch(`https://api.themoviedb.org/3/person/${props.id}/movie_credits?api_key=3e21184f03d65304d7cd0f6382c5f7e0`)
            const data = await response.json()
            setMovies(data.cast)
        }
        fetchMovies()
    },[props.id])

    const classLists=[`${classes.lists} ${ctx.light === true ? classes.light :''}`]

  return (
        <div className={classLists} >
      <h1>Known For</h1>
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
  )
}

export default MoviesList