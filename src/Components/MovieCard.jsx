import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ imageUrl, filmName }) {
  const navigate = useNavigate();

  const handleNavigateToOneMovie = () => {
    navigate('/allmovies/onemovie');
  };

  return (
    <div className='small_film_list' onClick={handleNavigateToOneMovie}>
      <img src={imageUrl} alt={filmName} />
      <p>{filmName}</p>
    </div>
  );
}

export default MovieCard;
