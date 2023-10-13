import { useNavigate } from 'react-router-dom';

const Kundkorg = () => {
  const navigate = useNavigate();

  const handleNavigateToCheckout = () => {
    navigate('/checkout'); // Update with the correct URL for checkout
  };

  return (
    <section>
      <p>display kundkorg</p>
      <div className='kundkorg_movie'>
        <p>image</p>
        <p>title</p>
        <button>-</button>
        <p>1</p>
        <button>+</button>
        <p>pris</p>
        <p>släng-knapp</p>
      </div>
      <p>pris</p>
      <button onClick={handleNavigateToCheckout}>knapp till utcheck</button>
    </section>
  );
};

export default Kundkorg;
