import {useContext} from 'react'
import classes from './SwitchTheme.module.css'
import {FaMoon} from 'react-icons/fa'
import {FaSun} from 'react-icons/fa'
import themeContext from '../../../store/theme-context'


const SwitchTheme = () => {
  const ctx =useContext(themeContext)
  const switchClass=[`${classes.switcher} ${ctx.light && classes.clicked}`]
  return (
    <div className={classes.box} onClick={ctx.onChangeTheme}>
        <FaMoon />
        <div className={classes.switch}>
            <div className={switchClass}/>
        </div>
        <FaSun />
    </div>
  )
}

export default SwitchTheme