import MovieCard from "./MovieCard";
import { getTrending } from "./tmdb";
import { useEffect, useState } from "react";

const AllMovies = () => {
  const [data, setData] = useState([]);

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
        <input type="text" id="search" placeholder="Sök film" />
      </label>

      <section className="all-movies-container">
        {data.map((movie, index) => (
          <MovieCard
            className="movie-card"
            imageUrl={movie.poster_path}
            filmName={movie.original_title}
            id= {movie.id}
          />
        ))}
      </section>
    </>
  );
};

export default AllMovies;

