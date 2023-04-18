import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API/fetchMovies';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <ul>
      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <p>{author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;
