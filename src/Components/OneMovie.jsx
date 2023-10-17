import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../features/addMovieToCart';
import { actionsAmount } from '../features/cartAmountValue';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const OneMovie = (movie) => {
  const [selectedValues, setSelectedValues] = useState(0);
  const dispatch = useDispatch();

  const addtoCart = () => dispatch(actions.addMovie());
  const hireMovie = () => dispatch(actionsAmount.hireMovie());
  const buyMovie = () => dispatch(actionsAmount.buyMovie());
  
  const params = useParams();
  const currentMovie = params.onemovie;

  const navigate = useNavigate();

  const handleButtonClick = (value) => {
    setSelectedValues(value);
    addtoCart();
    navigate(-1);

    if (value == 39) {
      hireMovie();
      console.log("39",value);
    } else if (value == 99) {
      buyMovie();
      console.log("99",value);
    }
  }

  //function that gets the movie data of the currentmovie-name

  return (
    <>
      <p>display one movie</p>
      <h2>{currentMovie}</h2>
      {movie.youtubelink ? (
        <iframe
          width='560'
          height='315'
          src={movie.youtubelink}
          title='YouTube video'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      ) : movie.img ? (
        <img
          src={movie.img}
          alt='Movie Poster'
          style={{ width: '200px', height: '300px' }}
        />
      ) : (
        <h2>{movie.title}</h2>
      )}

      <p>{movie.description}</p>

      <section className='one_movie_payment_options'>
        <button onClick={() => handleButtonClick(39)}>Hyra 39kr/dygn</button>
        <button onClick={() => handleButtonClick(99)}> Köp 99kr</button>
      </section>
    </>
  );
};

export default OneMovie;
