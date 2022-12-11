import { useState, useContext } from "react";
import classes from "./Search.module.css";
import themeContext from "../../../store/theme-context";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  const [searchArray, setSearchArray] = useState([]);
  const [searchWord ,setSearchWord] = useState('')
  const ctx = useContext(themeContext);

  const searchHandler = (event) => {
    setSearchWord(event.target.value)
    const fetchData = async () => {
      const word = event.target.value;
    const newWord =word.trim(' ')
      if (newWord.length === 0) {
        setSearchArray([]);
        return;
      }
      const response = await fetch(
        ctx.tv
          ? `https://api.themoviedb.org/3/search/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&query=${newWord}`
          : `https://api.themoviedb.org/3/search/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&query=${newWord}`
      );
      const data = await response.json();
      setSearchArray(data.results);
    };
    fetchData();
  };

  const resetArray =()=>{
    setSearchArray([])
    setSearchWord('')
  }


  return (
    <div className={classes.search}>
      <input
        type="text"
        placeholder={ctx.tv ? "Enter Your Series..." : "Enter Your Movie..."}
        onChange={searchHandler}
        value={searchWord}
      />
      <BiSearchAlt2 />
      {searchArray.length !== 0 && (
        <ul>
          {searchArray.map((val) => (
            <li onClick={resetArray} key={val.id}>
              <Link to={`/movie-detail/${val.id}`}>{val.title || val.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
