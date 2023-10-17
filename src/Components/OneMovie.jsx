import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/addMovieToCart';

const OneMovie = () => {
  const [selectedValues, setSelectedValues] = useState(0);
  const dispatch = useDispatch();

  const addtoCart = () => dispatch(actions.addMovie());
  const removeFromCart = () => dispatch(actions.removeMovie());
  const cartValue = useSelector(state => state.addMovieToCart);

  const handleButtonClick = (value) => {
    setSelectedValues(selectedValues + value);
    addtoCart();
  }
  
  const removeFromCurrentCart = (value) => {
    setSelectedValues(value = 0);
    removeFromCart();
  };

  return (
    <>
      <p>display one movie</p>
      <p>image of movie</p>
      <p>movie title</p>
      <p>longer description</p>
      <p>payment options</p>

      <section className='one_movie_payment_options'>
        <p>Hyra</p>
        <button onClick={() => handleButtonClick(39)}>39kr/dygn</button>
        <p>Köp</p>
        <button onClick={() => handleButtonClick(99)}>99kr</button>
      </section>

      <p>Temporär kundkorg: {selectedValues} :-</p>
      <p> visar hur mycket man har i kundkorgen: {cartValue} </p>
      <button onClick={removeFromCurrentCart}> ta bort filmen från korgen</button>
    </>
  );
};

export default OneMovie;
