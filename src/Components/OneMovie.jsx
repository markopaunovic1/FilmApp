import { useState } from 'react';
import { useParams } from 'react-router-dom';

const OneMovie = (movie) => {
  const params = useParams();
  const currentMovie = params.onemovie;

  const [selectedValues, setSelectedValues] = useState([]);

  const handleButtonClick = (value) => {
    setSelectedValues([...selectedValues, `${value}kr`]);
  };

  //function that gets the movie data of the currentmovie-name

  return (
    <>
      <p>display one movie</p>
      <h2>{currentMovie}</h2>
      {movie.youtubelink ? (
        <iframe
          width='560'
          height='315'
          src={movie.youtubelink}
          title='YouTube video'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      ) : movie.img ? (
        <img
          src={movie.img}
          alt='Movie Poster'
          style={{ width: '200px', height: '300px' }}
        />
      ) : (
        <h2>{movie.title}</h2>
      )}

      <p>{movie.description}</p>

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
