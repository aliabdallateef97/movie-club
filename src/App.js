import React,{Suspense} from 'react'
import Home from "./Pages/home";
import themeContext from "./store/theme-context";
import {useState} from 'react'
import {Route,Routes ,Navigate} from 'react-router-dom'
import Spinner from './Components/UI/Spinner/LoadingSpinner'


const MovieDetail =React.lazy(()=>import('./Pages/movieDetail'))
const Actor =React.lazy(()=> import('./Pages/actor'))

function App() {
  const [light ,setlight]=useState(false)
  const [tv ,setTv] =useState(false)
  const changeThemeHandler=()=>{
    setlight((curr)=> curr === true? false :true)
  }
  const changeTypeHandler=()=>{
    setTv((curr)=> curr === true? false :true)
  }
  return (
    <themeContext.Provider value={{light:light ,onChangeTheme:changeThemeHandler ,tv:tv ,onChangeType:changeTypeHandler}}>
      <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
        <Route path="/actor/:id" element={<Actor />} />
      </Routes>
      </Suspense>
    </themeContext.Provider>
  );
}

export default App;
