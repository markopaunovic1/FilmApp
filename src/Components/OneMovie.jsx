import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/addMovieToCart';
import { useParams } from 'react-router-dom';

const OneMovie = (movie) => {
  const [selectedValues, setSelectedValues] = useState(0);
  const dispatch = useDispatch();

  const addtoCart = () => dispatch(actions.addMovie());
  const removeFromCart = () => dispatch(actions.removeMovie());
  const cartValue = useSelector(state => state.addMovieToCart);
  const params = useParams();
  const currentMovie = params.onemovie;

  const handleButtonClick = (value) => {
    setSelectedValues(selectedValues + value);
    addtoCart();
  }
  
  const removeFromCurrentCart = (value) => {
    setSelectedValues(value = 0);
    removeFromCart();
  };

  //function that gets the movie data of the currentmovie-name

  return (
    <>
      <p>image</p>
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
        <h4 onClick={() => handleButtonClick(39)}>Hyra 39kr/dygn</h4>
        <h4 onClick={() => handleButtonClick(99)}> Köp 99kr</h4>
      </section>

      <p>Temporär kundkorg: {selectedValues} :-</p>
      <p> visar hur mycket man har i kundkorgen: {cartValue} </p>
      <button onClick={removeFromCurrentCart}> ta bort filmen från korgen</button>
    </>
  );
};

export default OneMovie;
