import { useState } from 'react';

const OneMovie = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleButtonClick = (value) => {
    setSelectedValues([...selectedValues, `${value}kr`]);
  };

  return (
    <>
      <p>display one movie</p>
      <p>image of movie</p>
      <p>movie title</p>
      <p>longer description</p>
      <p>payment options</p>

      <section className='one_movie_payment_options'>
        <p>Hyra</p>
        <button onClick={() => handleButtonClick(39)}>39kr/dygn</button>
        <p>Köp</p>
        <button onClick={() => handleButtonClick(99)}>99kr</button>
      </section>

      <p>Temporär kundkorg: {selectedValues.join(', ')}</p>
    </>
  );
};

export default OneMovie;
