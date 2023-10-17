import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ imageUrl, filmName, id }) {
  const navigate = useNavigate();

  const handleNavigateToOneMovie = () => {
    navigate(`/allmovies/` + id);
  };

  return (
    <div className='small_film_list' onClick={handleNavigateToOneMovie}>
      <img src={imageUrl} alt={filmName} width="200" />
      <p>{filmName}</p>
    </div>
  );
}

export default MovieCard;
