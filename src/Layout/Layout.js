import Headers from '../Components/Headers/Headers'
import classes from './Layout.module.css'
import { useContext } from 'react'
import themeContext from '../store/theme-context'

const Layout = (props) => {
  const ctx=useContext(themeContext)
  const classLayout=[`${classes.layout} ${ctx.light === true ?classes.light : ''}`]
  return (
    <div className={classLayout}>
        <Headers />
        {props.children}
    </div>
  )
}

export default Layout