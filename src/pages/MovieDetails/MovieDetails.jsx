import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';
import { getMovieDetails } from 'API/fetchMovies';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { GoBack, NavButtons, Button, LinkBtn } from './MovieDetails.styled';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }
  if (movieDetails === 0) {
    Notiflix.Notify.info('Qui timide rogat docet negare');
  }
  const backLink = location.state?.from ?? '/';

  return (
    <div>
      <GoBack to={backLink}>
        <FaLongArrowAltLeft />
        Go back
      </GoBack>
      <MovieCard movie={movieDetails} />
      <NavButtons>
        <Button>
          <LinkBtn to={'cast'} state={{ from: backLink }}>
            Cast
          </LinkBtn>
        </Button>
        <Button>
          <LinkBtn to={'reviews'} state={{ from: backLink }}>
            Reviews
          </LinkBtn>
        </Button>
      </NavButtons>
      <Suspense fallback={<h2>Loading</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
