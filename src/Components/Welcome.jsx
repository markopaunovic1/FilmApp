import MovieCard from './MovieCard';

function Welcome() {
  //lista som loopar igenom alla filmer i de olika kategorierna

  return (
    <>
      <p>Welcome page</p>
      <section>
        <label>
          <input type='text' id='search' placeholder=' Sök film, katalog      🔍' />
        </label>
      </section>

      <section>
        <h2>Topplista</h2>
        <div className='welcome_movie_container'>
          <MovieCard imageUrl='image_url_1' filmName='Film 1' />
          <MovieCard imageUrl='image_url_2' filmName='Film 2' />
          <MovieCard imageUrl='image_url_3' filmName='Film 3' />
        </div>
      </section>

      <section>
        <h2>Nya filmer</h2>
        <div className='welcome_movie_container'>
          <MovieCard imageUrl='image_url_1' filmName='Film 1' />
          <MovieCard imageUrl='image_url_2' filmName='Film 2' />
          <MovieCard imageUrl='image_url_3' filmName='Film 3' />
        </div>
      </section>
    </>
  );
}

export default Welcome;
