import {useState,useEffect} from 'react'
import classes from './Banner.module.css'

const Banner = () => {
    const [movie,setMovie]=useState([])
    

    useEffect(()=>{
        const fetchMovie=async()=>{
            const response=await fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=3e21184f03d65304d7cd0f6382c5f7e0&language=en-US')
            const data=await response.json()
            setMovie(data.results[Math.floor(Math.random() * data.results.length -1 )])
        }
        fetchMovie()
    },[])

    const cutOverview=(string,n)=>{
        return string?.length >n ? string.slice(0,n-1) + '...' :string
    }
    
  return (
    <div className={classes.banner} style={{
        backgroundImage: `${movie? `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})` :''}`,
        backgroundSize:"cover",
        backgroundPosition: "top center"
    }}>
        <div className={classes.txtBox}>
            <h1>{movie?.name}</h1>
            <p>{cutOverview(movie.overview ,150)}</p>
        </div>
        <div className={classes.fade} />

    </div>
  )
}

export default Banner