import { useNavigate } from 'react-router-dom';
import trash from'../assets/trash.png'

const Kundkorg = () => {
  const navigate = useNavigate();

  const handleNavigateToCheckout = () => {
    navigate('/checkout'); // Update with the correct URL for checkout
  };

  return (
    <section>
      <h3>Varukorg</h3>
      <div className='kundkorg_movie'>
        <p>image</p>
        <p>title</p>
        <p>1</p>
        <p>pris</p>
        <img src={trash} alt='släng-knapp'/>
      </div>

      <footer className='checka_ut'>
      <p>Summa</p>
      <button onClick={handleNavigateToCheckout}>CHECKA UT</button>
      </footer>
      
    </section>
  );
};

export default Kundkorg;
