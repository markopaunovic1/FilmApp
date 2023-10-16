import MovieCard from './MovieCard';

const AllMovies = () => {
  return (
    <>
      <p>All Movies in lists </p>

      <label>
        <input type='text' id='search' placeholder='Sök film' />
      </label>

      <section className='all-movies-container'>
        <MovieCard
          className='movie-card'
          imageUrl='image_url_1'
          filmName='Film 1'
        />
        <MovieCard
          className='movie-card'
          imageUrl='image_url_2'
          filmName='Film 2'
        />
        <MovieCard
          className='movie-card'
          imageUrl='image_url_3'
          filmName='Film 3'
        />
        <MovieCard
          className='movie-card'
          imageUrl='image_url_4'
          filmName='Film 4'
        />
        <MovieCard
          className='movie-card'
          imageUrl='image_url_5'
          filmName='Film 5'
        />
        <MovieCard
          className='movie-card'
          imageUrl='image_url_6'
          filmName='Film 6'
        />
      </section>
    </>
  );
};

export default AllMovies;
