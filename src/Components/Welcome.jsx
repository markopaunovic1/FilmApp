import MovieCard from "./MovieCard";
import { getGenres, getMoviesFromGenre } from "./tmdb";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Welcome() {
  //lista som loopar igenom alla filmer i de olika kategorierna
  const [data, setData] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const navigate = useNavigate();

  const searchBarChanged = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
  };

  const searchMovie = (e) => {
    e.preventDefault();
    navigate(`/allmovies/`, { state: { searchTerm: {searchBar}}});
  };

  const getData = async () => {
    let genres = await getGenres();
    genres = genres.genres?.sort((a, b) => 0.5 - Math.random());
    let movies = [];
    for (let i = 0; i < genres.length; i++) {
      if (i === 4) {
        break;
      }
      const moviesFromGenres = await getMoviesFromGenre(genres[i].id);
      movies.push(moviesFromGenres);
    }
    setMovieGenres(genres);
    setData(movies);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <p>Welcome page</p>
      <section>
        <label>
        <form onSubmit={searchMovie}>
          <input
            type="text"
            id="search"
            placeholder=" Sök film, katalog      🔍"
            onChange={searchBarChanged}
          />
          </form>
        </label>
      </section>

      {movieGenres.slice(0,4).map((genre, index) => (
        <section>
          <h2>{genre.name}</h2>
          <div className="welcome_movie_container">
            {data[index]?.results.slice(0,10).map((movie, mIndex) => (
              <MovieCard
                imageUrl={movie.poster_path}
                filmName={movie.original_title}
                id={movie.id}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export default Welcome;
