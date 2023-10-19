import MovieCard from "./MovieCard";
import { getTrending, search } from "./tmdb";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AllMovies = () => {
  const [data, setData] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const { state } = useLocation();

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

  const getSearchResult = async (sr) => {
    let response = await search(sr);
    setData(response.results);
  }

  const getData = async () => {
    let response = await getTrending();
    setData(response.results);
  };

  useEffect(() => {
    const st = state?.searchTerm.searchBar;
    if (st !== "" && (typeof st !== "undefined")) {
      setSearchBar(st);
      getSearchResult(st);
    } else {
      getData();
    }
  }, []);

  return (
    <>
      <p>All Movies in lists </p>

      <label>
        <form onSubmit={searchMovie}>
          <input
          value={searchBar}
            type="text"
            id="search"
            placeholder="Sök film"
            onChange={searchBarChanged}
          />
        </form>
      </label>
      <p></p>

      <section className="all-movies-container">
        {data.map((movie, index) => (
          <MovieCard
            key={movie.id}
            className="movie-card"
            imageUrl={movie.poster_path}
            filmName={movie.original_title}
            id={movie.id}
          />
        ))}
      </section>
    </>
  );
};

export default AllMovies;
