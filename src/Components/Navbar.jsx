import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateBack = () => {
    navigate(-1);
    //navigates back to start
  };

  const handleNavigateToAllMovies = () => {
    navigate('/allmovies');
  };

  const handleNavigateToCheckout = () => {
    navigate('/checkout');
  };

  const handleNavigateToKundkorg = () => {
    navigate('/kundkorg');
  };

  return (
    <nav className='navbar'>
      <section className='navbar_title'>
        {location.pathname !== '/' && (
          <button onClick={handleNavigateBack}>Bakåt</button>
        )}
      </section>
      <section className='navbar_logo'>
        <h1>Film App</h1>
      </section>
      <section className='navbar_actions'>
        <button onClick={handleNavigateToAllMovies}>Till All Movies</button>
        <button onClick={handleNavigateToCheckout}>Till Checkout</button>
        <button onClick={handleNavigateToKundkorg}>Till kundkorg</button>
      </section>
    </nav>
  );
}

export default Navbar;
