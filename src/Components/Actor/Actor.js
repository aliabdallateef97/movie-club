import {useState ,useEffect ,useContext} from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../Layout/Layout'
import classes from './Actor.module.css'
import MoviesList from './MovieList/MoviesList'
import themeContext from '../../store/theme-context'

const Actor = () => {
    const [actor ,setActor]=useState([])
    const {id} = useParams()
    const ctx =useContext(themeContext)

    useEffect(()=>{
        const fetchActor =async()=>{
            const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=3e21184f03d65304d7cd0f6382c5f7e0`)
            const data = await response.json()
            setActor(data)
        }
        fetchActor()
    },[id])

    const actorClass=[`${classes.actor} ${ctx.light? classes.light : ''}`]
  return (
    <Layout>
        <div className={actorClass}>
            <img src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} />
            <div className={classes.information}>
                <h2>{actor.name}</h2>
                <h4>{actor.biography}</h4>
            </div>
        </div>
        <MoviesList id={id} />
    </Layout>
  )
}

export default Actor