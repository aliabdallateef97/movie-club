import Banner from "../Banner/Banner";
import Layout from "../../Layout/Layout";
import Lists from "../Lists/Lists";
import SwitchButton from "../UI/SwitchButton/SwitchButton";
import { Fragment, useContext } from "react";
import themeContext from "../../store/theme-context";

const Home = () => {
  const ctx = useContext(themeContext);
  return (
    <Layout>
      <Banner />
      <SwitchButton />
      {ctx.tv ? (
        <Fragment>
          <Lists
            url="https://api.themoviedb.org/3/trending/tv/week?api_key=3e21184f03d65304d7cd0f6382c5f7e0"
            title="Trending"
          />
          <Lists
            url="https://api.themoviedb.org/3/tv/top_rated?api_key=3e21184f03d65304d7cd0f6382c5f7e0&language=en_US"
            title="Top Rated"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=10759"
            title="Action"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=16"
            title="Animation"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=35"
            title="Comedy"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=80"
            title="Crime"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=99"
            title="Documentary"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=18"
            title="Drama"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=10751"
            title="Family"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=10762"
            title="Kids"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=9648"
            title="Mystery"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=10763"
            title="News"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=10765"
            title="Fantasy"
          />
        </Fragment>
      ) : (
        <Fragment>
          <Lists
            url="https://api.themoviedb.org/3/trending/movie/week?api_key=3e21184f03d65304d7cd0f6382c5f7e0"
            title="Trending"
          />
          <Lists
            url="https://api.themoviedb.org/3/movie/top_rated?api_key=3e21184f03d65304d7cd0f6382c5f7e0&language=en_US"
            title="Top Rated"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=28"
            title="Action"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=35"
            title="Comedy"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=18"
            title="Drama"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=10749"
            title="Romance"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=27"
            title="Horror"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=80"
            title="Crime"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=36"
            title="History"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=10752"
            title="War"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=9648"
            title="Mystery"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=16"
            title="Animation"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=10751"
            title="Family"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=10402"
            title="Music"
          />
          <Lists
            url="https://api.themoviedb.org/3/discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=878"
            title="Science Fiction"
          />
        </Fragment>
      )}
    </Layout>
  );
};

export default Home;
