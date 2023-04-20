import { useLocation, Link } from 'react-router-dom';
import { Movies, Item, Description, Image, Title } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <Movies>
      {movies.map(movie => (
        <Item key={movie.id}>
          <Description to={`/movies/${movie.id}`} state={{ from: location }}>
            <Image src={imgBaseUrl.concat(movie.poster_path)} alt="" />
            <Title>{movie.title ?? movie.original_name}</Title>
          </Description>
        </Item>
      ))}
    </Movies>
  );
};
