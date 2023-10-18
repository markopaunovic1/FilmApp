import MovieCard from "./MovieCard";
import { getGenres, getMoviesFromGenre } from "./tmdb";
import { useEffect, useState } from "react";

function Welcome() {
  //lista som loopar igenom alla filmer i de olika kategorierna
  const [data, setData] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [searchBar, setSearchBar] = useState("");

  const searchBarChanged = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
    console.log(searchBar);
  };

  const searchMovie = async (e) => {
    e.preventDefault();
    let response = await search(searchBar);
    setData(response.results);
  };

  const getData = async () => {
    let genres = await getGenres();
    genres = genres.genres?.sort((a, b) => 0.5 - Math.random());
    let movies = [];
    for (let i = 0; i < genres.length; i++) {
      if (i === 4) {
        break;
      }
      const moviesFromGenres = await getMoviesFromGenre(genres[i]?.id);
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
          <input
            type="text"
            id="search"
            placeholder=" Sök film, katalog      🔍"
          />
        </label>
      </section>

      {movieGenres.map((genre, index) => (
        <section>
          <h2>{genre.name}</h2>
          <div className="welcome_movie_container">
            {data[index].results.slice(0,10).map((movie, mIndex) => (
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
