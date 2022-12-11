import {useState,useEffect} from 'react'
import classes from './Headers.module.css'
import Logo from '../../assets/logo.png'
import SwitchTheme from '../UI/SwitchTheme/SwitchTheme'
import { Link } from 'react-router-dom'
import Search from './Search/Search'

const Headers = () => {
  const [scroll ,setScroll]=useState(false)

  const showBlackNav=()=>{
    window.scrollY > 300 ? setScroll(true) : setScroll(false) 
  }
  useEffect(()=>{
    window.addEventListener('scroll',showBlackNav)
    return ()=> window.removeEventListener('scroll',showBlackNav)
  },[])
  const navClass =`${classes.navbar} ${scroll ? classes.black_nav : ""}`
  return (
    <div className={navClass}>
      <Link to="/home">
      <img src={Logo} alt="logo"/></Link>
     <div className={classes.searchSwitch}>
      <Search />
      <SwitchTheme />
     </div>
    </div>
  )
}

export default Headers