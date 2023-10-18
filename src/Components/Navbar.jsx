import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/addMovieToCart';
import kundvang from '../assets/kundvang.png';
import bakåtknapp from '../assets/bakåtknapp.png';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateBack = () => {
    navigate(-1);
    //navigates back to start
  };

  const handleNavigateToKundkorg = () => {
    navigate('/kundkorg');
  };

  const cartValue = useSelector((state) =>
    state.cart.cartItems ? state.cart.cartItems.length : 0
  );

  return (
    <nav className='navbar'>
      <section className='navbar_title'>
        {location.pathname !== '/' && (
          <img src={bakåtknapp} alt='' onClick={handleNavigateBack} />
        )}
      </section>

      <section className='navbar_logo'>
        <h1>FilmFyndet</h1>
      </section>

      <section>
        <img src={kundvang} alt='' onClick={handleNavigateToKundkorg} />
        <p>{cartValue}</p>
      </section>
    </nav>
  );
}

export default Navbar;
