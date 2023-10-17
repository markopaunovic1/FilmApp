import MovieCard from "./MovieCard";
import { getTrending, search } from "./tmdb";
import { useEffect, useState } from "react";

const AllMovies = () => {
  const [data, setData] = useState([]);
  const [searchBar, setSearchBar] = useState("");

  const searchBarChanged = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
    console.log(searchBar);
  }

  const searchMovie = async (e) => {
    e.preventDefault();
    let response = await search(searchBar);
    setData(response.results);
  };

  const getData = async () => {
    let response = await getTrending();
    setData(response.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <p>All Movies in lists </p>

      <label>
        <form onSubmit={searchMovie}>
          <input type="text" id="search" placeholder="Sök film" onChange={searchBarChanged} />
        </form>
      </label>

      <section className="all-movies-container">
        {data.map((movie, index) => (
          <MovieCard
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
