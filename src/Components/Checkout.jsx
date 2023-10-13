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
      <div>
        {' '}
        <p> Information om kund</p>
        <p>input fields?</p>
        <p>namn</p>
        <p>epost</p>
        <p>telefonnummer</p>
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
