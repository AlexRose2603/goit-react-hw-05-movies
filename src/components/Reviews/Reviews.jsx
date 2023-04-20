import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { getMovieReviews } from 'API/fetchMovies';
import { ReviewsList, Review, Author, Comment } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }
  if (reviews.length === 0) {
    Notiflix.Notify.failure('There are no reviews on this movie yet');
  }

  return (
    <ReviewsList>
      {reviews.map(({ id, content, author }) => (
        <Review key={id}>
          <div>
            <Author>{author}</Author>
          </div>
          <div>
            <Comment>{content}</Comment>
          </div>
        </Review>
      ))}
    </ReviewsList>
  );
};
export default Reviews;
