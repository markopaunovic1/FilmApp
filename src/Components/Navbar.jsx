import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ title }) {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/');
  };

  const handleNavigateToAllMovies = () => {
    navigate('/allmovies');
  };

  const handleNavigateToOneMovie = () => {
    navigate('/allmovies/onemovie'); // You may need to provide the correct URL here
  };

  const handleNavigateToCheckout = () => {
    navigate('/checkout'); // Update with the correct URL for checkout
  };

  const handleNavigateToKundkorg = () => {
    navigate('/kundkorg'); // Update with the correct URL for checkout
  };

  return (
    <nav className='navbar'>
      <section className='navbar_title'>
        <h3>{title}</h3>
      </section>
      <section className='navbar_logo'>
        <h1>Film App</h1>
      </section>
      <section className='navbar_actions'>
        <button onClick={handleNavigateToHome}>Till Front Page</button>
        <button onClick={handleNavigateToAllMovies}>Till All Movies</button>
        <button onClick={handleNavigateToOneMovie}>Till One Movie</button>
        <button onClick={handleNavigateToCheckout}>Till Checkout</button>
        <button onClick={handleNavigateToKundkorg}>Till kundkorg</button>
      </section>
    </nav>
  );
}

export default Navbar;
