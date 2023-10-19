import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/addMovieToCart';

import trash from '../assets/trash.png';

const Kundkorg = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const removeFromCart = (movieId) => {
    dispatch(actions.removeMovie({ movieId }));
  };

  const handleNavigateToCheckout = () => {
    navigate('/checkout'); // Update with the correct URL for checkout
  };

  return (
    <section>
      <h3>Varukorg</h3>
      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        cartItems.map((movie) => (
          <div key={movie.id} className='kundkorg_movie'>
            <img src={movie.image} alt='Movie Poster' />
            <p>{movie.title}</p>
            <p>{movie.value} kr</p>
           <div className='trashImg'>  
            <img src={trash} alt='släng-knapp' onClick={() => removeFromCart(movie.id)} />
          </div>
        ))
      ) : (
        <p> no items in cart. </p>
      )}

      <footer className='checka_ut'>
        <button onClick={handleNavigateToCheckout}>CHECKA UT</button>
      </footer>
    </section>
  );
};

export default Kundkorg;
