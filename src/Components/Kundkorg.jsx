import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/addMovieToCart';

const Kundkorg = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeFromCart = () => dispatch(actions.removeMovie());
  const amountValue = useSelector(state => state.cartAmountValue);

  const handleNavigateToCheckout = () => {
    navigate('/checkout'); // Update with the correct URL for checkout
  };

  return (
    <section>
      <p>display kundkorg</p>
      <div className='kundkorg_movie'>
        <p>image</p>
        <p>title</p>
        <p>1</p>
        <p>pris {amountValue}</p>
        <img onClick={removeFromCart} src="https://www.svgrepo.com/show/349637/trash.svg" alt="trash" className="trash-image"/>
      </div>
      <p>totala priset: </p>
      <button onClick={handleNavigateToCheckout}>knapp till utcheck</button>
    </section>
  );
};

export default Kundkorg;
