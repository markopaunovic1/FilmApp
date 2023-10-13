import { useNavigate } from 'react-router-dom';

const AllMovies = () => {
  const navigate = useNavigate();

  const handleNavigateToOneMovie = () => {
    navigate('/allmovies/onemovie'); // You may need to provide the correct URL here
  };
  return (
    <>
      <p>All Movies in lists </p>

      <p>and maybe a search function</p>

      <section>
        <p> Topplista</p>
        <button onClick={handleNavigateToOneMovie}>A Movie</button>
        <button onClick={handleNavigateToOneMovie}>A Movie</button>
      </section>
      <section>
        <p> Nya filmer</p>
        <button onClick={handleNavigateToOneMovie}>A Movie</button>
        <button onClick={handleNavigateToOneMovie}>A Movie</button>
      </section>
    </>
  );
};

export default AllMovies;
