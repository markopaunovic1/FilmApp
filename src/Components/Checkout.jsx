import { useState } from 'react';

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState(''); // Default selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <p>display checkout</p>
      <p>orderbekräftelse</p>
      <div className='info_about_customer'>
        <p> Information om kund</p>
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
        <p>betalningsmöjligheter</p>
        <div className='payment_selection'>
          <label>
            <input
              type='radio'
              value='swish'
              checked={selectedOption === 'swish'}
              onChange={handleOptionChange}
            />
            Swish
          </label>

          <label>
            <input
              type='radio'
              value='kortbetalning'
              checked={selectedOption === 'kortbetalning'}
              onChange={handleOptionChange}
            />
            Kortbetalning
          </label>
          <label>
            <input
              type='radio'
              value='klarna'
              checked={selectedOption === 'klarna'}
              onChange={handleOptionChange}
            />
            Klarna
          </label>
        </div>
      </div>

      <div className='payment_order'>
        <p>list of movies</p>
        <p>and price</p>
      </div>

      <button>pay button</button>
    </>
  );
};

export default Checkout;
