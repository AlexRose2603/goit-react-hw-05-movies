import { useState, useEffect, Suspense } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { getMovieDetails } from 'API/fetchMovies';
import { MovieCard } from 'components/MovieCard/MovieCard';

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
  const backLink = location.state?.from ?? '/';

  return (
    <div>
      <Link to={backLink}>Go back</Link>
      <MovieCard movie={movieDetails} />
      <ul>
        <li>
          <NavLink to={'cast'} state={{ from: backLink }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={'reviews'} state={{ from: backLink }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<h2>Loading</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
