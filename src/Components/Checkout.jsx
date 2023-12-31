import { useState } from 'react';

import Popup from 'reactjs-popup';
import payment from '../assets/payment.gif';

import kort from '../assets/kort.png';
import swish from '../assets/swish.png';
import klarna from '../assets/klarna.png';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/addMovieToCart';

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isPaymentOpen, setPaymentOpen] = useState(false);
  const dispatch = useDispatch();
  const checkoutItems = useSelector((state) => state.cart.cartItems);

  //räknar ut priset att betala
  let priceToPay = checkoutItems.reduce(
    (total, movie) => total + movie.value,
    0
  );

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //tömmer listan med filmer i reducern
  const clearCart = () => {
    dispatch(actions.clearCart());
  };

  const handlePayment = () => {
    setPaymentOpen(true);

    console.log('handle payment');
    // Reset values upon completion
    clearCart();
    setSelectedOption('');
    priceToPay = 0;
  };

  return (
    <>
      <h3>orderbekräftelse</h3>
      <div className='info_about_customer'>
        <h4> Information om kund</h4>
        <label>
          Namn:
          <input type='text' id='name' placeholder='Skriv ditt namn' />
        </label>

        <label>
          E-post:
          <input type='email' id='email' placeholder='Din e-postadress' />
        </label>

        <label>
          Telefonnummer:
          <input type='tel' id='phone' placeholder='Ditt telefonnummer' />
        </label>
      </div>

      <div>
        <div className='payment_selection'>
          <h4>betalningsmetod</h4>
          <label>
            <input
              type='radio'
              value='swish'
              checked={selectedOption === 'swish'}
              onChange={handleOptionChange}
            />
            Swish
            <img src={swish} alt='swish' />
          </label>

          <label>
            <input
              type='radio'
              value='kortbetalning'
              checked={selectedOption === 'kortbetalning'}
              onChange={handleOptionChange}
            />
            Kortbetalning
            <img src={kort} alt='kort' />
          </label>
          <label>
            <input
              type='radio'
              value='klarna'
              checked={selectedOption === 'klarna'}
              onChange={handleOptionChange}
            />
            Klarna
            <img src={klarna} alt='klarna' />
          </label>
        </div>
      </div>

      <div className='payment_order'>
        {Array.isArray(checkoutItems) && checkoutItems.length > 0 ? (
          checkoutItems.map((movie) => (
            <div key={movie.id} className='kundkorg_movie'>
              <img src={movie.image} alt='Movie Poster' />
              <p>{movie.title}</p>
              <p>{movie.value} kr</p>
            </div>
          ))
        ) : (
          <p>
            {' '}
            Tack för ditt köp. Du hittar filmerna i din mail alldeles strax.
            Välkommen tillbaka snart igen!{' '}
          </p>
        )}
      </div>

      <footer className='pay_button'>
        <p>{priceToPay}kr</p>
        <Popup trigger={<button>Betala</button>} modal onOpen={handlePayment}>
          {(close) => (
            <div className='modal'>
              <div className='content'>
                <img src={payment} alt='Payment GIF' />
              </div>
            </div>
          )}
        </Popup>
      </footer>
    </>
  );
};

export default Checkout;
