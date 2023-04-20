import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'API/fetchMovies';
import { ActorsList, Actor, Photo, Details } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <ActorsList>
      {cast.map(({ id, profile_path, name, character }) => (
        <Actor key={id}>
          <Photo src={imgBaseUrl.concat(profile_path)} alt="" />
          <Details>{name}</Details>
          <Details>{character}</Details>
        </Actor>
      ))}
    </ActorsList>
  );
};
export default Cast;
