import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/addMovieToCart';
import { actionsAmount } from '../features/cartAmountValue';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getMovie } from './tmdb';

const OneMovie = (id) => {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  const currentMovie = params.onemovie;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getInfo = async () => {
    let response = await getMovie(currentMovie);
    setMovie(response);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const [selectedValues, setSelectedValues] = useState(0);

  const addtoCart = (movie) => dispatch(actions.addMovie(movie));
  const hireMovie = () => dispatch(actionsAmount.hireMovie());
  const buyMovie = () => dispatch(actionsAmount.buyMovie());

  const handleButtonClick = (value) => {
    if (value == 39) {
      hireMovie();
    } else if (value == 99) {
      buyMovie();
    }

    const movieDetails = {
      id: movie.id,
      name: movie.original_title,
      image: movie.poster_path,
      description: movie.overview,
      value: value,
    };

    setSelectedValues(value);
    addtoCart(movieDetails);
    navigate(-1);
  };

  return (
    <>
      <h2>{movie.original_title}</h2>
      {typeof movie.videos?.results[0] != "undefined" ? (
        <iframe
          width='560'
          height='315'
          src={movie.videos.results[0].key}
          title='YouTube video'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      ) : movie.poster_path ? (
        <img
          src={movie.poster_path}
          alt='Movie Poster'
          style={{ width: '200px', height: '300px' }}
        />
      ) : (
        <h2>{movie.original_title}</h2>
      )}

      <p className='infoMovie'>{movie.overview}</p>

      <footer className='one_movie_payment_options'>
        <h4 onClick={() => handleButtonClick(39)}>Hyra 39kr/dygn</h4>
        <h4 onClick={() => handleButtonClick(99)}> Köp 99kr</h4>
      </footer>
    </>
  );
};

export default OneMovie;
