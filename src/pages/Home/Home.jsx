import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'API/fetchMovies';
import { MoviesList } from 'components/MovieList/MoviesList';
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);
  return (
    <main>
      <MoviesList movies={movies} />
    </main>
  );
};
export default Home;
