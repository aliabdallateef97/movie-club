import classes from './Cast.module.css'
import {useContext ,useState ,useEffect} from 'react'
import themeContext from '../../../store/theme-context'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from 'react-router-dom';


const Cast = (props) => {
    const [casting ,setCasting]=useState([])
    const ctx=useContext(themeContext)

    useEffect(() => {
        const fetchMovieCast = async () => {
          const response = await fetch(
            ctx.tv ?
            `https://api.themoviedb.org/3/tv/${props.id}/credits?api_key=3e21184f03d65304d7cd0f6382c5f7e0` :
            `https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=3e21184f03d65304d7cd0f6382c5f7e0`
          );
          const data = await response.json();
          setCasting(data.cast);
        };
        fetchMovieCast();
      }, [props.id ,ctx.tv]);


  return (
    <div className={`${classes.casting} ${ctx.light ? classes.light : ''}`}>
        <h2>{ctx.tv?"Series Cast" : "Movie Cast"}</h2>
        <Splide options={{
            fixedWidth:"180px",
            arrows:false,
            pagination:false,
            drag:"free"}}>
                {casting.map((cast)=> cast.known_for_department=== "Acting" ?
                <SplideSlide className={`${classes.cast} ${ctx.light ? classes.light : ''}`} key={cast.id}>
                <Link to={`/actor/${cast.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                  alt={cast.name}
                />
               <div className={classes.actor}>
               <h4>{cast.name}</h4>
                <p>{cast.character}</p>
               </div>
                </Link>
              </SplideSlide>:'')}
      </Splide>
    </div>
  )
}

export default Cast