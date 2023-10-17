import { useLocation, useNavigate } from 'react-router-dom';
import kundvang from'../assets/kundvang.png'
import bakåtknapp from'../assets/bakåtknapp.png'

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
           <img src={bakåtknapp} alt="" 
           onClick={handleNavigateBack}/>
        )}
      </section>

      <section className='navbar_logo'>
        <h1>FilmFyndet</h1>
      </section>

      <section>
        <img src={kundvang} alt="" 
        onClick={handleNavigateToKundkorg}/>
        </section>


      {/* <section className='navbar_actions'>
        <button onClick={handleNavigateToAllMovies}>Till All Movies</button>
        <button onClick={handleNavigateToCheckout}>Till Checkout</button>
        <button onClick={handleNavigateToKundkorg}>Till kundkorg</button>
      </section> */}

    </nav>
  );
}

export default Navbar;
