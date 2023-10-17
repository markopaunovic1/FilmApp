import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/addMovieToCart';

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

  const cartValue = useSelector(state => state.addMovieToCart);

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

        <div>
        <p>cart</p>
        <img onClick={handleNavigateToKundkorg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ic_shopping_cart_48px.svg/2048px-Ic_shopping_cart_48px.svg.png" alt="cart"  className="trash-image"/>
        <p>{cartValue}</p>
        </div>

      </section>
    </nav>
  );
}

export default Navbar;
